# frozen_string_literal: true
class Wallet
  attr_reader :user, :address, :cake_balance

  def initialize(user)
    @user = user
    @address = user.wallet_address
    @cake_balance = total_cake
  end

  private

  def total_cake
    return "0" if address.blank?

    BscClient.new.token_balance(
      "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82",
      18,
      address,
    )
  end
end
