# frozen_string_literal: true
class CreateDepositOrders < ActiveRecord::Migration[6.1]
  def change
    create_table(:deposit_orders) do |t|
      t.references(:user, null: false, foreign_key: true)
      t.string(:status, null: false)

      t.integer(:received_amount_cents, null: false, default: 0)
      t.integer(:paid_amount_cents, null: false, default: 0)

      t.timestamps
    end
  end
end
