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

    field :deposit_orders, DepositOrderType.connection_type, null: false do
      argument :filter, Inputs::DepositOrderFilterInput, required: false
    end

    def deposit_orders(filter: nil)
      scope = Pundit.policy_scope(current_user, DepositOrder)

      return scope.where(status: filter.status) if filter&.status

      scope
    end
  end
end
