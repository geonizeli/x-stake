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

  context "when the user has enough balance" do
    it "withdraws from his account and creates a buy order" do
      user = create(
        :user,
        balance: build(:balance, amount: 1.0034)
      )

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

      expect(user.balance.reload.amount.to_s).to(eq("0.2034"))
    end
  end

  context "when the user does not have enough balance" do
    it "returns withdrawl error" do
      user = create(
        :user,
        balance: build(:balance, amount: 0.0034)
      )

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

      expect(user.balance.reload.amount.to_s).to(eq("0.0034"))
    end
  end
end
