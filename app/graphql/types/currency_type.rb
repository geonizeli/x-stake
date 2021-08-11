# frozen_string_literal: true
module Types
  class CurrencyType < Types::BaseObject
    implements GraphQL::Types::Relay::Node
    global_id_field :id

    graphql_name "Currency"

    field :id, ID, null: false
    field :name, String, null: false
  end
end
