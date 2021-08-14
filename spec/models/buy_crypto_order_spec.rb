# frozen_string_literal: true

# == Schema Information
#
# Table name: buy_crypto_orders
#
#  id                :bigint           not null, primary key
#  paid_amount_cents :integer          default(0), not null
#  received_amount   :decimal(20, 10)
#  status            :string           not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#  currency_id       :bigint           not null
#  user_id           :bigint           not null
#
# Indexes
#
#  index_buy_crypto_orders_on_currency_id  (currency_id)
#  index_buy_crypto_orders_on_user_id      (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (currency_id => currencies.id)
#  fk_rails_...  (user_id => users.id)
#
require "rails_helper"

RSpec.describe(BuyCryptoOrder, type: :model) do
  describe "validations" do
    context "when status is `processing`" do
      subject { build(:buy_crypto_order, status: :processing) }

      it { is_expected.to(validate_presence_of(:paid_amount_cents)) }
      it { is_expected.not_to(validate_presence_of(:received_amount)) }
    end

    context "when status is `completed`" do
      subject { build(:buy_crypto_order, status: :completed) }

      it { is_expected.to(validate_presence_of(:paid_amount_cents)) }
      it { is_expected.to(validate_presence_of(:received_amount)) }
    end

    context "when status is `canceled`" do
      subject { build(:buy_crypto_order, status: :canceled) }

      it { is_expected.to(validate_presence_of(:paid_amount_cents)) }
      it { is_expected.not_to(validate_presence_of(:received_amount)) }
    end
  end

  describe "associations" do
    it { is_expected.to(belong_to(:user)) }
    it { is_expected.to(belong_to(:currency)) }
  end
end
