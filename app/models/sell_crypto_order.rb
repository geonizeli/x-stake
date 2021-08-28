# frozen_string_literal: true

# == Schema Information
#
# Table name: sell_crypto_orders
#
#  id                    :bigint           not null, primary key
#  paid_amount           :decimal(20, 10)  default(0.0), not null
#  received_amount_cents :integer          default(0), not null
#  status                :string           not null
#  created_at            :datetime         not null
#  updated_at            :datetime         not null
#  user_id               :bigint           not null
#
# Indexes
#
#  index_sell_crypto_orders_on_user_id  (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (user_id => users.id)
#
class SellCryptoOrder < ApplicationRecord
  include Processable
  include Notifiable

  belongs_to :user

  monetize :received_amount_cents

  validates :paid_amount, presence: true, numericality: { greater_than: 0 }
  validates :received_amount_cents, presence: true, if: :completed?

  private

  def notification_message
    "
    💸 New sell crypto order! 💸\n
    user: #{user.email} \n
    amount: #{paid_amount} CAKE
    "
  end
end
