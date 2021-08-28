# frozen_string_literal: true
module Types
  class BuyCryptoOrderType < Types::BaseObject
    implements GraphQL::Types::Relay::Node
    global_id_field :id

    graphql_name "BuyCryptoOrder"

    field :id, ID, null: false
    field :status, ProcessStatusEnum, null: false
    field :paid_amount_cents, Integer, null: false
    field :received_amount, String, null: true
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
  end
end
