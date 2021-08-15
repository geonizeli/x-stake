# frozen_string_literal: true
require "rails_helper"

RSpec.describe(BalancePolicy, type: :policy) do
  context "when user has balances" do
    it "return only balances from a user" do
      create(:balance)
      create(:balance)

      user = build(:user)
      balance = create(:balance, user: user)

      balances = BalancePolicy::Scope.new(user, Balance).resolve

      expect(balances).to(eq([balance]))
    end
  end

  context "when user has not balances" do
    it "return empty array" do
      create(:balance)
      create(:balance)

      user = build(:user)

      balances = BalancePolicy::Scope.new(user, Balance).resolve

      expect(balances).to(eq([]))
    end
  end

  context "when user is nil" do
    it "return empty array" do
      create(:balance)
      create(:balance)

      balances = BalancePolicy::Scope.new(nil, Balance).resolve

      expect(balances).to(eq([]))
    end
  end
end
