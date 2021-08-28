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

  context "when the user has enough balance" do
    it "withdraws from his account and creates a buy order" do
      currency = create(:currency)
      user = create(
        :user,
        balances: [
          build(:balance, currency: currency, amount: 1.0034),
        ]
      )

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

      expect(user.balances.first.reload.amount.to_s).to(eq("0.2034"))
    end
  end

  context "when the user does not have enough balance" do
    it "returns withdrawl error" do
      currency = create(:currency)
      user = create(
        :user,
        balances: [
          build(:balance, currency: currency, amount: 0.0034),
        ]
      )

      variables = {
        "amount": "0.80",
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
          "createStakeOrder" => {
            "errors" => [{
              "fullMessages" => ["Quantia saldo insuficiente"],
              "fieldName" => "amount",
              "messages" => ["saldo insuficiente"],
              "path" => ["attributes", "amount"],
            }],
            "order" => nil,
          },
        },
      }))

      expect(user.balances.first.reload.amount.to_s).to(eq("0.0034"))
    end
  end
end
