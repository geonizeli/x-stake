# frozen_string_literal: true
module Types
  class DepositOrderType < Types::BaseObject
    implements GraphQL::Types::Relay::Node
    global_id_field :id

    graphql_name "DepositOrder"

    field :id, ID, null: false
    field :status, ProcessStatusEnum, null: false
    field :received_amount_cents, Integer, null: false
    field :paid_amount_cents, Integer, null: false
    field :transaction_id, String, null: false
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
  end
end
