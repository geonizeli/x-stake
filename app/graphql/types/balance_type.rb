# frozen_string_literal: true
module Types
  class BalanceType < Types::BaseObject
    implements GraphQL::Types::Relay::Node
    global_id_field :id

    graphql_name "Balance"

    field :id, ID, null: false
    field :currency, CurrencyType, null: false
    field :amount, String, null: false
  end
end
