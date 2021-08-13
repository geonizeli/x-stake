# frozen_string_literal: true
module Types
  class BaseConnection < Types::BaseObject
    include GraphQL::Types::Relay::ConnectionBehaviors
    has_nodes_field(false)
    edges_nullable(false)
    edge_nullable(false)
  end
end
