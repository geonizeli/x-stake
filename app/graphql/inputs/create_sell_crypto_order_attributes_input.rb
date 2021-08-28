# frozen_string_literal: true
module Inputs
  class CreateSellCryptoOrderAttributesInput < Types::BaseInputObject
    argument :amount, String, "Amount to be paid", required: true
  end
end
