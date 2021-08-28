# frozen_string_literal: true
module Types
  class SellCryptoOrderType < Types::BaseObject
    implements GraphQL::Types::Relay::Node
    global_id_field :id

    graphql_name "SellCryptoOrder"

    field :id, ID, null: false
    field :status, ProcessStatusEnum, null: false
    field :paid_amount, String, null: false
    field :received_amount_cents, Integer, null: true
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
  end
end
