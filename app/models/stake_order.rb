# frozen_string_literal: true

# == Schema Information
#
# Table name: stake_orders
#
#  id         :bigint           not null, primary key
#  amount     :decimal(20, 10)  default(0.0), not null
#  pool_name  :string           not null
#  status     :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :bigint           not null
#
# Indexes
#
#  index_stake_orders_on_user_id  (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (user_id => users.id)
#
class StakeOrder < ApplicationRecord
  include Processable
  include Notifiable

  belongs_to :user

  validates :pool_name, presence: true
  validates :amount, presence: true

  def self.ransackable_attributes(auth_object = nil)
    super & ["pool_name", "amount"]
  end

  private

  def notification_message
    "
    💸 New stake order! 💸\n
    user: #{user.email}
    amount: #{amount}
    "
  end
end
