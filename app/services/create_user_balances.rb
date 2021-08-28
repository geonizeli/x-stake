# frozen_string_literal: true
class CreateUserBalances
  attr_reader :user

  def initialize(user)
    @user = user
  end

  def call
    return nil if Rails.env.test?

    ActiveRecord::Base.transaction do
      create_fiat_balance
      create_balances
    end
  end

  private

  def create_fiat_balance
    FiatBalance.find_or_create_by!(
      user_id: user.id
    )
  end

  def create_balances
    Balance.find_or_create_by(
      user_id: user.id
    )
  end
end
