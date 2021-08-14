# frozen_string_literal: true
class CreateSellCryptoOrders < ActiveRecord::Migration[6.1]
  def change
    create_table(:sell_crypto_orders) do |t|
      t.references(:user, null: false, foreign_key: true)
      t.references(:currency, null: false, foreign_key: true)

      t.string(:status, null: false)
      t.decimal(:paid_amount, precision: 20, scale: 10, null: false, default: 0)
      t.integer(:received_amount_cents, null: true)

      t.timestamps
    end
  end
end
