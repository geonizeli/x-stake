# frozen_string_literal: true
module Types
  class QueryType < Types::BaseObject
    include GraphQL::Types::Relay::HasNodeField
    include GraphQL::Types::Relay::HasNodesField

    field :current_user, UserType, null: true
    def current_user
      context[:current_user]
    end

    field :balances, BalanceType.connection_type, null: false
    def balances
      Pundit.policy_scope(current_user, Balance)
    end

    field :fiat_balances, FiatBalanceType.connection_type, null: false
    def fiat_balances
      Pundit.policy_scope(current_user, FiatBalance)
    end

    field :sell_crypto_orders, SellCryptoOrderType.connection_type, null: false
    def sell_crypto_orders
      []
    end

    field :buy_crypto_orders, BuyCryptoOrderType.connection_type, null: false
    def buy_crypto_orders
      []
    end
  end
end
