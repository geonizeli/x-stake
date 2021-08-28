# frozen_string_literal: true
class DropCurrency < ActiveRecord::Migration[6.1]
  def up
    remove_reference(:balances, :currency, index: true, foreign_key: true)
    remove_reference(:buy_crypto_orders, :currency, index: true, foreign_key: true)
    remove_reference(:sell_crypto_orders, :currency, index: true, foreign_key: true)
    remove_reference(:stake_orders, :currency, index: true, foreign_key: true)

    drop_table(:currencies)
  end
end
