# frozen_string_literal: true
module Types
  class WalletType < Types::BaseObject
    graphql_name "Wallet"

    field :address, String, null: true
    field :cake_balance, String, null: false
  end
end
