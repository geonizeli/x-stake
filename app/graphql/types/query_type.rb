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
  end
end
