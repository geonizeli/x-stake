# frozen_string_literal: true

# == Schema Information
#
# Table name: buy_crypto_orders
#
#  id                :bigint           not null, primary key
#  paid_amount_cents :integer          default(0), not null
#  received_amount   :decimal(20, 10)  default(0.0), not null
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
class BuyCryptoOrder < ApplicationRecord
  include Processable

  belongs_to :user
  belongs_to :currency

  monetize :paid_amount_cents

  validates :paid_amount_cents, presence: true, numericality: { greater_than: 0 }
  validates :received_amount, presence: true, if: :completed?
end
