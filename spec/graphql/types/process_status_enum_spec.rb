# frozen_string_literal: true

require "rails_helper"

describe Types::ProcessStatusEnum do
  describe "values" do
    it { expect(described_class.values.keys).to(match(["PROCESSING", "COMPLETED", "CANCELED"])) }
  end
end
