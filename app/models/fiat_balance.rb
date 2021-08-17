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
class FiatBalance < ApplicationRecord
  include Trackable

  belongs_to :user

  monetize :amount_cents

  validates :amount_cents, numericality: { greater_than_or_equal_to: 0 }

  def amount_formatted
    amount.format
  end

  def withdrawal!(value)
    update!(amount_cents: amount_cents - value)
  end

  def deposit!(value)
    update!(amount_cents: amount_cents + value)
  end
end
