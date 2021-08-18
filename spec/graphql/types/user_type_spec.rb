# frozen_string_literal: true
require "rails_helper"

RSpec.describe(Types::UserType) do
  subject { described_class }

  describe "arguments" do
    it { is_expected.to(have_a_field(:id).of_type("ID!")) }
    it { is_expected.to(have_a_field(:email).of_type("String!")) }
    it { is_expected.to(have_a_field(:first_name).of_type("String!")) }
    it { is_expected.to(have_a_field(:last_name).of_type("String!")) }
    it { is_expected.to(have_a_field(:wallet_address).of_type("String")) }
  end
end
