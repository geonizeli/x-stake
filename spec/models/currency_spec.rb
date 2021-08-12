# frozen_string_literal: true

# == Schema Information
#
# Table name: currencies
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
require "rails_helper"

RSpec.describe(Currency, type: :model) do
  describe "validations" do
    it { is_expected.to(validate_presence_of(:name)) }
  end
end