# frozen_string_literal: true
module Types
  class QueryType < Types::BaseObject
    include GraphQL::Types::Relay::HasNodeField
    include GraphQL::Types::Relay::HasNodesField

    # TODO: remove me
    field :test_field, [String], null: false,
      description: "An example field added by the generator"
    def test_field
      [
        SecureRandom.uuid,
        SecureRandom.uuid,
      ]
    end
  end
end
