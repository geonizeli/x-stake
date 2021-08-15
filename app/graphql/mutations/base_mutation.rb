# frozen_string_literal: true
module Mutations
  class BaseMutation < GraphQL::Schema::RelayClassicMutation
    argument_class Types::BaseArgument
    field_class Types::BaseField
    input_object_class Types::BaseInputObject
    object_class Types::BaseObject

    field :errors, [Types::RecordInvalidType],
      null: true,
      description: "Errors encountered during execution of the mutation."

    def current_user
      context[:current_user]
    end

    def decode_id(encoded_id)
      GraphQL::Schema::UniqueWithinType.decode(encoded_id).last
    end
  end
end
