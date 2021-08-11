# frozen_string_literal: true
module Types
  class UserType < Types::BaseObject
    # implements GraphQL::Types::Relay::Node
    global_id_field :id

    graphql_name "User"

    field :id, ID, null: false
    field :first_name, String, null: false
    field :last_name, String, null: false
    field :full_name, String, null: false
    field :email, String, null: false
  end
end
