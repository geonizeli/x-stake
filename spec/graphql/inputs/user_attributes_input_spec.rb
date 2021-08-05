# frozen_string_literal: true
require "rails_helper"

RSpec.describe(Inputs::UserAttributesInput) do
  subject { described_class }

  describe "arguments" do
    it { is_expected.to(accept_argument(:first_name).of_type("String!")) }
    it { is_expected.to(accept_argument(:last_name).of_type("String!")) }
  end
end
