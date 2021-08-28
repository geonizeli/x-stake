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
FactoryBot.define do
  factory :sell_crypto_order do
    association :user
    status { :processing }
    received_amount_cents { rand(10000) }
    paid_amount { rand * 10000 }
  end
end
