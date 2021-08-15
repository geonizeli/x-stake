# frozen_string_literal: true
module Inputs
  class CreateBuyCryptoOrderAttributesInput < Types::BaseInputObject
    argument :currency_id, ID, required: true
    argument :amount_cents, Integer, "Amount to be paid", required: true
  end
end
