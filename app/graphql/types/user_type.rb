# frozen_string_literal: true
module Types
  class UserType < Types::BaseObject
    # implements GraphQL::Types::Relay::Node
    global_id_field :id

    graphql_name "User"

    field :id, ID, null: false
    field :email, String, null: false
    field :first_name, String, null: false
    field :last_name, String, null: false
    field :fiat_balance, FiatBalanceType, null: false
    field :wallet, WalletType, null: false
    def wallet
      Wallet.new(object)
    end
  end
end
