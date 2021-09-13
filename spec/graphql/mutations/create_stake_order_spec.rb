# frozen_string_literal: true

require "rails_helper"

RSpec.describe(Mutations::CreateStakeOrder, type: :mutation) do
  let(:query_string) do
    <<~GQL
      mutation(
        $amount: String!,
        $poolName: String!,
      ) {
        createStakeOrder(input: {
          order: {
            amount: $amount,
            poolName: $poolName,
          }
        }) {
          errors {
            fullMessages
            fieldName
            messages
            path
          }
          order {
            poolName
            status
            amount
          }
        }
      }
    GQL
  end

  context "when attributes are valid" do
    it "creates a buy order" do
      user = create(:user)

      variables = {
        "amount": "0.80",
        "poolName": "CAKE/BNB",
        "status": "PROCESSING",
      }

      context = { current_user: user }

      result = XStakeSchema.execute(
        query_string,
        variables: variables,
        context: context
      ).to_h.with_indifferent_access

      expect(result).to(eq({
        "data" => {
          "createStakeOrder" => {
            "errors" => nil,
            "order" => {
              "status" => "PROCESSING",
              "amount" => "0.8",
              "poolName" => "CAKE/BNB",
            },
          },
        },
      }))
    end
  end
end
