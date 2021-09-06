# frozen_string_literal: true
module Inputs
  class DepositOrderFilterInput < Types::BaseInputObject
    argument :status, [Types::ProcessStatusEnum], required: false
  end
end
