# frozen_string_literal: true
module Inputs
  class StakeOrderFilterInput < Types::BaseInputObject
    StakeOrder.ransackable_attributes.each do |attr|
      argument attr, PredicateInput, required: false
    end

    argument :status, [Types::ProcessStatusEnum], required: false
  end
end
