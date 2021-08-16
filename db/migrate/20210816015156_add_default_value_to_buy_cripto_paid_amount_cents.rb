# frozen_string_literal: true
class AddDefaultValueToBuyCriptoPaidAmountCents < ActiveRecord::Migration[6.1]
  def change
    # rubocop:disable Rails/ReversibleMigration
    execute(<<-SQL.squish)
      UPDATE buy_crypto_orders
      SET received_amount = 0
      WHERE received_amount IS NULL
    SQL

    change_column_default(:buy_crypto_orders, :received_amount, from: nil, to: 0)
    change_column_null(:buy_crypto_orders, :received_amount, false)
  end
end
