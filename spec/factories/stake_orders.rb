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
FactoryBot.define do
  factory :stake_order do
    association :user
    pool_name { "CAKE" }
    amount { rand * 10000 }
    status { :processing }
  end
end
