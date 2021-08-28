# frozen_string_literal: true

require "rails_helper"

describe Inputs::CreateBuyCryptoOrderAttributesInput do
  subject { described_class }

  describe "fields" do
    it { is_expected.to(accept_argument("amount_cents").of_type("Int!")) }
  end
end
