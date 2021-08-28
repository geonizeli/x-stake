# frozen_string_literal: true
require "rails_helper"

RSpec.describe(Types::SellCryptoOrderType) do
  subject { described_class }

  describe "arguments" do
    it { is_expected.to(have_a_field(:id).of_type("ID!")) }
    it { is_expected.to(have_a_field(:paid_amount).of_type("String!")) }
    it { is_expected.to(have_a_field(:received_amount_cents).of_type("Int")) }
    it { is_expected.to(have_a_field(:status).of_type("ProcessStatus!")) }
    it { is_expected.to(have_a_field(:created_at).of_type("ISO8601DateTime!")) }
    it { is_expected.to(have_a_field(:updated_at).of_type("ISO8601DateTime!")) }
  end
end
