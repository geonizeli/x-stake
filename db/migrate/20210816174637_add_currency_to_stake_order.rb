# frozen_string_literal: true
class AddCurrencyToStakeOrder < ActiveRecord::Migration[6.1]
  def change
    add_reference(:stake_orders, :currency, foreign_key: true)
  end
end
