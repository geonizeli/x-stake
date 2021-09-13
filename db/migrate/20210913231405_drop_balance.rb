# frozen_string_literal: true
class DropBalance < ActiveRecord::Migration[6.1]
  def change
    # rubocop:disable Rails/ReversibleMigration
    drop_table(:balances)
  end
end
