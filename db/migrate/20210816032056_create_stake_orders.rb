# frozen_string_literal: true
class CreateStakeOrders < ActiveRecord::Migration[6.1]
  def change
    create_table(:stake_orders) do |t|
      t.references(:user, null: false, foreign_key: true)
      t.string(:pool_name, null: false)
      t.string(:status, null: false)

      t.decimal(:amount, precision: 20, scale: 10, null: false, default: 0)

      t.timestamps
    end
  end
end
