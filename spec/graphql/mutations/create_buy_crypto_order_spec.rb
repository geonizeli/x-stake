# frozen_string_literal: true

require "rails_helper"

RSpec.describe(Mutations::CreateBuyCryptoOrder, type: :mutation) do
  let(:query_string) do
    <<~GQL
      mutation($amountCents: Int!) {
        createBuyCryptoOrder(input: {
          order: {
            amountCents: $amountCents,
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
            paidAmountCents
            receivedAmount
          }
        }
      }
    GQL
  end

  context "when the user has enough balance" do
    it "withdraws from his account and creates a buy order" do
      user = create(
        :user,
        fiat_balance: build(
          :fiat_balance,
          amount_cents: 100_00
        ),
      )

      variables = {
        "amountCents": 90_00,
      }

      context = { current_user: user }

      result = XStakeSchema.execute(
        query_string,
        variables: variables,
        context: context
      ).to_h.with_indifferent_access

      expect(result).to(eq({
        "data" => {
          "createBuyCryptoOrder" => {
            "errors" => nil,
            "order" => {
              "status" => "PROCESSING",
              "paidAmountCents" => 90_00,
              "receivedAmount" => "0.0",
            },
          },
        },
      }))

      expect(user.fiat_balance.reload.amount_cents).to(eq(10_00))
    end
  end

  context "when the user does not have enough balance" do
    it "returns withdrawl error" do
      user = create(
        :user,
        fiat_balance: build(
          :fiat_balance,
          amount_cents: 80_00
        ),
      )

      variables = {
        "amountCents": 90_00,
      }

      context = { current_user: user }

      result = XStakeSchema.execute(
        query_string,
        variables: variables,
        context: context
      ).to_h.with_indifferent_access

      expect(result).to(eq({
        "data" => {
          "createBuyCryptoOrder" => {
            "errors" => [{
              "fullMessages" => ["Quantia saldo insuficiente"],
              "fieldName" => "amount_cents",
              "messages" => ["saldo insuficiente"],
              "path" => ["attributes", "amount_cents"],
            }],
            "order" => nil,
          },
        },
      }))
    end
  end
end
