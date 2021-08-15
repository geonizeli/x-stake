# frozen_string_literal: true
require "rails_helper"

RSpec.describe(FiatBalancePolicy, type: :policy) do
  describe "::Scope" do
    context "when user has balances" do
      it "return only balances from a user" do
        create(:fiat_balance)
        create(:fiat_balance)

        user = build(:user)
        balance = create(:fiat_balance, user: user)

        balances = FiatBalancePolicy::Scope.new(user, FiatBalance).resolve

        expect(balances).to(eq([balance]))
      end
    end

    context "when user has not balances" do
      it "return empty array" do
        create(:fiat_balance)
        create(:fiat_balance)

        user = build(:user)

        balances = FiatBalancePolicy::Scope.new(user, FiatBalance).resolve

        expect(balances).to(eq([]))
      end
    end

    context "when user is nil" do
      it "return empty array" do
        create(:fiat_balance)
        create(:fiat_balance)

        balances = FiatBalancePolicy::Scope.new(nil, FiatBalance).resolve

        expect(balances).to(eq([]))
      end
    end
  end
end
