# frozen_string_literal: true
class CreateBuyCryptoOrders < ActiveRecord::Migration[6.1]
  def change
    create_table(:buy_crypto_orders) do |t|
      t.references(:user, null: false, foreign_key: true)
      t.references(:currency, null: false, foreign_key: true)

      t.string(:status, null: false)
      t.integer(:paid_amount_cents, null: false, default: 0)
      t.decimal(:received_amount, precision: 20, scale: 10, null: true)

      t.timestamps
    end
  end
end
