# frozen_string_literal: true
class AddTransactionIdToDespoitOrder < ActiveRecord::Migration[6.1]
  def change
    add_column(:deposit_orders, :transaction_id, :uuid, default: "gen_random_uuid()", null: false)
  end
end
