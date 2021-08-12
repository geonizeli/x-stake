# frozen_string_literal: true

# == Schema Information
#
# Table name: fiat_balances
#
#  id              :bigint           not null, primary key
#  amount_cents    :integer          default(0), not null
#  amount_currency :string           default("BRL"), not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  user_id         :bigint           not null
#
# Indexes
#
#  index_fiat_balances_on_user_id  (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (user_id => users.id)
#
require "rails_helper"

RSpec.describe(FiatBalance, type: :model) do
  describe "associations" do
    it { is_expected.to(belong_to(:user)) }
  end
end
