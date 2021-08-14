# frozen_string_literal: true

# == Schema Information
#
# Table name: user_documents
#
#  id         :bigint           not null, primary key
#  status     :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :bigint           not null
#
# Indexes
#
#  index_user_documents_on_user_id  (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (user_id => users.id)
#
FactoryBot.define do
  factory :user_document do
    association :user
    status { :pending_review }
  end
end
