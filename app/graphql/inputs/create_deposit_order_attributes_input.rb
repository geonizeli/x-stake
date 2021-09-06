# frozen_string_literal: true
module Inputs
  class CreateDepositOrderAttributesInput < Types::BaseInputObject
    argument :amount_cents, Integer, "Amount to be paid", required: true
  end
end
