# frozen_string_literal: true
class AddDefaultValueToSellCryptoOrderRecivedAmountCents < ActiveRecord::Migration[6.1]
  def change
    # rubocop:disable Rails/ReversibleMigration
    execute(<<-SQL.squish)
      UPDATE sell_crypto_orders
      SET received_amount_cents = 0
      WHERE received_amount_cents IS NULL
    SQL

    change_column_default(:sell_crypto_orders, :received_amount_cents, from: nil, to: 0)
    change_column_null(:sell_crypto_orders, :received_amount_cents, false)
  end
end
