# frozen_string_literal: true

# == Schema Information
#
# Table name: users
#
#  id                     :bigint           not null, primary key
#  email                  :string           default(""), not null
#  encrypted_password     :string           default(""), not null
#  first_name             :string           not null
#  last_name              :string           not null
#  remember_created_at    :datetime
#  reset_password_sent_at :datetime
#  reset_password_token   :string
#  wallet_address         :string
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#
# Indexes
#
#  index_users_on_email                 (email) UNIQUE
#  index_users_on_reset_password_token  (reset_password_token) UNIQUE
#
class User < ApplicationRecord
  include Notifiable

  devise :database_authenticatable, :registerable,
    :recoverable, :rememberable, :validatable

  has_many :documents, class_name: "UserDocument", dependent: :destroy
  has_many :stake_orders, dependent: :restrict_with_error
  has_many :sell_crypto_orders, dependent: :restrict_with_error
  has_one :fiat_balance, dependent: :restrict_with_error

  validates :first_name, :last_name, :email, presence: true
  validates :email, uniqueness: true

  after_create do
    create_balances
  end

  def create_balances
    CreateUserBalances.new(self).call
  end

  private

  def notification_message
    "🎉 New user: #{email} 🎉"
  end

  def send_devise_notification(notification, *args)
    devise_mailer.send(notification, self, *args).deliver_later
  end
end
