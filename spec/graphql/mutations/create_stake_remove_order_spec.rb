# frozen_string_literal: true

require "rails_helper"

RSpec.describe(Mutations::CreateStakeRemoveOrder, type: :mutation) do
  let(:query_string) do
    <<~GQL
      mutation(
        $amount: String!,
        $poolName: String!,
      ) {
        createStakeRemoveOrder(input: {
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

  context "when the user has enough balance" do
    it "withdraws from his account and creates a buy order" do
      user = create(
        :user,
        balance: build(:balance, amount: 0)
      )

      variables = {
        "amount": "200.80",
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
          "createStakeRemoveOrder" => {
            "errors" => nil,
            "order" => {
              "status" => "PROCESSING",
              "amount" => "-200.8",
              "poolName" => "CAKE/BNB",
            },
          },
        },
      }))
    end
  end

  context "when it repeats the mutation with a request in `processing`" do
    it "update amount from the order" do
      user = create(
        :user,
        balance: build(:balance, amount: 0)
      )

      create(:stake_order, amount: -200.8, user: user, pool_name: "CAKE/BNB")

      variables = {
        "amount": "200.80",
        "poolName": "CAKE/BNB",
      }

      context = { current_user: user }

      result = XStakeSchema.execute(
        query_string,
        variables: variables,
        context: context
      ).to_h.with_indifferent_access

      expect(result).to(eq({
        "data" => {
          "createStakeRemoveOrder" => {
            "errors" => nil,
            "order" => {
              "status" => "PROCESSING",
              "amount" => "-401.6",
              "poolName" => "CAKE/BNB",
            },
          },
        },
      }))
    end
  end
end
