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
#  transaction_id        :uuid             not null
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
class DepositOrder < ApplicationRecord
  include Processable
  include Trackable
  include Notifiable

  belongs_to :user

  monetize :paid_amount_cents
  monetize :received_amount_cents

  private

  def notification_message
    "
    💸 New deposit order! 💸\n
    user: #{user.email} \n
    amount: #{paid_amount.format}
    "
  end
end
