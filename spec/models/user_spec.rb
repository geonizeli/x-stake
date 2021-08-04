# frozen_string_literal: true

# == Schema Information
#
# Table name: users
#
#  id         :bigint           not null, primary key
#  email      :string           not null
#  first_name :string           not null
#  last_name  :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
# Indexes
#
#  index_users_on_email  (email) UNIQUE
#
require "rails_helper"

RSpec.describe(User, type: :model) do
  describe "validations" do
    it { is_expected.to(validate_presence_of(:first_name)) }
    it { is_expected.to(validate_presence_of(:last_name)) }
    it { is_expected.to(validate_presence_of(:email)) }
  end
end
