# frozen_string_literal: true
module Inputs
  class UserAttributesInput < Types::BaseInputObject
    graphql_name "UserAttributesInput"

    argument :first_name, String, required: true
    argument :last_name, String, required: true
  end
end
