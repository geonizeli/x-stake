# frozen_string_literal: true
module Mutations
  class CreateUser < BaseMutation
    field :success, Boolean, null: false

    argument :user, Inputs::UserAttributesInput, required: true

    def resolve(user:)
      User.create!({ **user, email: context[:current_auth].email })

      { success: true }
    rescue ActiveRecord::RecordInvalid => e
      { success: false, errors: [e.message] }
    end
  end
end
