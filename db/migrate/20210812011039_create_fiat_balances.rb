# frozen_string_literal: true
class CreateFiatBalances < ActiveRecord::Migration[6.1]
  def change
    create_table(:fiat_balances) do |t|
      t.references(:user, null: false, foreign_key: true)
      t.monetize(:amount)

      t.timestamps
    end
  end
end
