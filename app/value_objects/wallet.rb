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
    return 0 if address.blank?

    BscClient.new.token_balance(
      contract: "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82",
      digits: 18,
      wallet_address: address,
    ) - total_cake_debit
  end

  def total_cake_debit
    total_cake_stake_debit + total_cake_sell_debit
  end

  def total_cake_stake_debit
    user.stake_orders.processing.add.sum(&:amount).to_f
  end

  def total_cake_sell_debit
    user.sell_crypto_orders.processing.sum(&:paid_amount).to_f
  end
end
