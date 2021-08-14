# frozen_string_literal: true

# == Schema Information
#
# Table name: balances
#
#  id          :bigint           not null, primary key
#  amount      :decimal(20, 10)  default(0.0), not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  currency_id :bigint           not null
#  user_id     :bigint           not null
#
# Indexes
#
#  index_balances_on_currency_id  (currency_id)
#  index_balances_on_user_id      (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (currency_id => currencies.id)
#  fk_rails_...  (user_id => users.id)
#
FactoryBot.define do
  factory :balance do
    association :user
    association :currency
    amount { (rand * (10000 - 0) + 0) }
  end
end