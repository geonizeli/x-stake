# frozen_string_literal: true

require "rails_helper"

RSpec.describe(Mutations::CreateSellCryptoOrder, type: :mutation) do
  let(:query_string) do
    <<~GQL
      mutation($currencyId: ID!, $amount: String!) {
        createSellCryptoOrder(input: {
          order: {
            currencyId: $currencyId,
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
            currency {
              name
            }
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

      currency_global_id = GraphQL::Schema::UniqueWithinType.encode("Currency", currency.id)

      variables = {
        "currencyId": currency_global_id,
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
              "receivedAmountCents" => nil,
              "currency" => {
                "name" => "CAKE",
              },
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

      currency_global_id = GraphQL::Schema::UniqueWithinType.encode("Currency", currency.id)

      variables = {
        "currencyId": currency_global_id,
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