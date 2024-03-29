# frozen_string_literal: true
module Inputs
  class CreateStakeOrderAttributesInput < Types::BaseInputObject
    argument :pool_name, String, required: true
    argument :amount, String, "Amount to be paid", required: true
  end
end
