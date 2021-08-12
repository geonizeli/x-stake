# frozen_string_literal: true
module Types
  class BalanceType < Types::BaseObject
    implements GraphQL::Types::Relay::Node
    global_id_field :id

    graphql_name "Balance"

    field :id, ID, null: false
    field :amount, String, null: false

    field :currency, CurrencyType, null: false
    def currency
      dataloader.with(Sources::ActiveRecord, Currency).load(object.currency_id)
    end
  end
end
