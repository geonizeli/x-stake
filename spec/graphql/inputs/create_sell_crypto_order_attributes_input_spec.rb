# frozen_string_literal: true

require "rails_helper"

describe Inputs::CreateSellCryptoOrderAttributesInput do
  subject { described_class }

  describe "fields" do
    it { is_expected.to(accept_argument("amount").of_type("String!")) }
  end
end
