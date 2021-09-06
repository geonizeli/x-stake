# frozen_string_literal: true
module Mutations
  class CreateDepositOrder < BaseMutation
    field :order, Types::DepositOrderType, null: true

    argument :order, Inputs::CreateDepositOrderAttributesInput, required: true

    def resolve(order:)
      ActiveRecord::Base.transaction do
        record = BuildDepositOrder.new(paid_amount_cents: order[:amount_cents], user_id: current_user.id).build
        record.save!

        { order: record.reload }
      rescue ActiveRecord::RecordInvalid => e
        { errors: Resolvers::ModelErrors.from_active_record_model(e.record) }
      end
    end
  end
end
