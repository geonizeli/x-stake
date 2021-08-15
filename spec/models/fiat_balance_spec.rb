# frozen_string_literal: true

# == Schema Information
#
# Table name: fiat_balances
#
#  id              :bigint           not null, primary key
#  amount_cents    :integer          default(0), not null
#  amount_currency :string           default("BRL"), not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  user_id         :bigint           not null
#
# Indexes
#
#  index_fiat_balances_on_user_id  (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (user_id => users.id)
#
require "rails_helper"

RSpec.describe(FiatBalance, type: :model) do
  describe "associations" do
    it { is_expected.to(belong_to(:user)) }
  end

  describe ".withdrwal!" do
    context "when value is greater than the balance" do
      it "raise ActiveRecord::RecordInvalid" do
        balance = build(:fiat_balance, amount_cents: 100_00)

        expect { balance.withdrawal!(100_50) }.to(
          raise_error(ActiveRecord::RecordInvalid, "A validação falhou: Quantia saldo insuficiente")
        )
      end
    end

    context "when value is equals to the balance" do
      it "returns true" do
        balance = build(:fiat_balance, amount_cents: 100_00)

        expect(balance.withdrawal!(100_00)).to(eq(true))
      end
    end

    context "when value is smaller than the balance" do
      it "returns true" do
        balance = build(:fiat_balance, amount_cents: 100_00)

        expect(balance.withdrawal!(90_00)).to(eq(true))
      end
    end
  end
end
