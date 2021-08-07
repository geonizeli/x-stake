# frozen_string_literal: true
module Types
  class QueryType < Types::BaseObject
    include GraphQL::Types::Relay::HasNodeField
    include GraphQL::Types::Relay::HasNodesField

    field :current_user, UserType, null: true
    def current_user
      context[:current_user]
    end
  end
end
