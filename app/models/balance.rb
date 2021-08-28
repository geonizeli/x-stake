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
class Balance < ApplicationRecord
  include Trackable

  belongs_to :user

  validates :amount, presence: true, numericality: { greater_than_or_equal_to: 0 }

  def withdrawal!(value)
    update!(amount: amount - value)
  end

  def deposit!(value)
    update!(amount: amount + value)
  end
end
