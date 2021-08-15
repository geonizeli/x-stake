# frozen_string_literal: true
module Types
  class FiatBalanceType < Types::BaseObject
    implements GraphQL::Types::Relay::Node
    global_id_field :id

    graphql_name "FiatBalance"

    field :id, ID, null: false
    field :amount_cents, Integer, null: false
    field :amount_currency, String, null: false
  end
end
