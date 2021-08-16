# frozen_string_literal: true

# == Schema Information
#
# Table name: stake_orders
#
#  id          :bigint           not null, primary key
#  amount      :decimal(20, 10)  default(0.0), not null
#  pool_name   :string           not null
#  status      :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  currency_id :bigint
#  user_id     :bigint           not null
#
# Indexes
#
#  index_stake_orders_on_currency_id  (currency_id)
#  index_stake_orders_on_user_id      (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (currency_id => currencies.id)
#  fk_rails_...  (user_id => users.id)
#
class StakeOrder < ApplicationRecord
  include Processable

  belongs_to :user
  belongs_to :currency

  validates :pool_name, presence: true
  validates :amount, presence: true
end
