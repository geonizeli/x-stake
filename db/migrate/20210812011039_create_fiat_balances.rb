# frozen_string_literal: true
class CreateFiatBalances < ActiveRecord::Migration[6.1]
  def change
    create_table(:fiat_balances) do |t|
      t.references(:user, null: false, foreign_key: true)

      t.integer(:amount_cents, null: false, default: 0)
      t.string(:amount_currency, null: false, default: "BRL")

      t.timestamps
    end
  end
end
