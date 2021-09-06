# frozen_string_literal: true
require "rails_helper"

RSpec.describe(BuildDepositOrder, type: :service) do
  describe "#build" do
    it "returns DepositOrder" do
      deposit_order = described_class.new(paid_amount_cents: 1000, user_id: 1).build

      expect(deposit_order.paid_amount_cents).to(eq(1000))
      expect(deposit_order.received_amount_cents).to(eq(950))
    end
  end
end
