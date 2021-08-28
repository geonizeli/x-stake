# frozen_string_literal: true

# == Schema Information
#
# Table name: balances
#
#  id         :bigint           not null, primary key
#  amount     :decimal(20, 10)  default(0.0), not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :bigint           not null
#
# Indexes
#
#  index_balances_on_user_id  (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (user_id => users.id)
#
require "rails_helper"

RSpec.describe(Balance, type: :model) do
  describe "validations" do
    it { is_expected.to(validate_presence_of(:amount)) }
  end

  describe "associations" do
    it { is_expected.to(belong_to(:user)) }
  end

  describe ".withdrwal!" do
    context "when value is greater than the balance" do
      it "raise ActiveRecord::RecordInvalid" do
        balance = build(:balance, amount: 70.342)

        expect { balance.withdrawal!(80) }.to(
          raise_error(ActiveRecord::RecordInvalid, "A validação falhou: Quantia saldo insuficiente")
        )
      end
    end

    context "when value is equals to the balance" do
      it "returns true" do
        balance = build(:balance, amount: 70.342)

        expect(balance.withdrawal!(70.342)).to(eq(true))
      end
    end

    context "when value is smaller than the balance" do
      it "returns true" do
        balance = build(:balance, amount: 70.342)

        expect(balance.withdrawal!(20)).to(eq(true))
      end
    end
  end
end
