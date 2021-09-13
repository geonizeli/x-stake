# frozen_string_literal: true

require "rails_helper"

RSpec.describe(Mutations::CreateSellCryptoOrder, type: :mutation) do
  let(:query_string) do
    <<~GQL
      mutation($amount: String!) {
        createSellCryptoOrder(input: {
          order: {
            amount: $amount,
          }
        }) {
          errors {
            fullMessages
            fieldName
            messages
            path
          }
          order {
            status
            paidAmount
            receivedAmountCents
          }
        }
      }
    GQL
  end

  context "when attributes are valid " do
    it "creates a buy order" do
      user = create(:user)

      variables = {
        "amount": "0.80",
      }

      context = { current_user: user }

      result = XStakeSchema.execute(
        query_string,
        variables: variables,
        context: context
      ).to_h.with_indifferent_access

      expect(result).to(eq({
        "data" => {
          "createSellCryptoOrder" => {
            "errors" => nil,
            "order" => {
              "status" => "PROCESSING",
              "paidAmount" => "0.8",
              "receivedAmountCents" => 0,
            },
          },
        },
      }))
    end
  end
end
