# frozen_string_literal: true
module Types
  class StakeOrderType < Types::BaseObject
    implements GraphQL::Types::Relay::Node
    global_id_field :id

    graphql_name "StakeOrder"

    field :id, ID, null: false
    field :pool_name, String, null: false
    field :status, ProcessStatusEnum, null: false
    field :amount, String, null: false
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
  end
end
