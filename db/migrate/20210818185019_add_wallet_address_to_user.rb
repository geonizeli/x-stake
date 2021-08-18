# frozen_string_literal: true
class AddWalletAddressToUser < ActiveRecord::Migration[6.1]
  def change
    add_column(:users, :wallet_address, :string)
  end
end
