# frozen_string_literal: true

# == Schema Information
#
# Table name: deposit_orders
#
#  id                    :bigint           not null, primary key
#  paid_amount_cents     :integer          default(0), not null
#  received_amount_cents :integer          default(0), not null
#  status                :string           not null
#  created_at            :datetime         not null
#  updated_at            :datetime         not null
#  user_id               :bigint           not null
#
# Indexes
#
#  index_deposit_orders_on_user_id  (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (user_id => users.id)
#
FactoryBot.define do
  factory :deposit_order do
    user { nil }
    status { "MyString" }
  end
end
