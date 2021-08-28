# frozen_string_literal: true
module Types
  class QueryType < Types::BaseObject
    include GraphQL::Types::Relay::HasNodeField
    include GraphQL::Types::Relay::HasNodesField
    include RansackSupport

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
      Pundit.policy_scope(current_user, SellCryptoOrder)
    end

    field :buy_crypto_orders, BuyCryptoOrderType.connection_type, null: false
    def buy_crypto_orders
      Pundit.policy_scope(current_user, BuyCryptoOrder)
    end

    field :stake_orders, StakeOrderType.connection_type, null: false do
      argument :filter, Inputs::StakeOrderFilterInput, required: false
    end

    def stake_orders(filter: nil)
      scope = Pundit.policy_scope(current_user, StakeOrder)

      scope = scope.where(status: filter.status) if filter&.status

      ransack(scope, filter)
    end
  end
end
