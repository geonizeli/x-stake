# frozen_string_literal: true
module Mutations
  class CreateDepositOrder < BaseMutation
    field :order, Types::DepositOrderType, null: true

    argument :order, Inputs::CreateStakeOrderAttributesInput, required: true

    def resolve(order:)
      ActiveRecord::Base.transaction do
        record = BuildDepositOrder.new(paid_amount_cents: order[:amount_cents], user: current_user.id)
        record.save!

        { order: record }
      rescue ActiveRecord::RecordInvalid => e
        { errors: Resolvers::ModelErrors.from_active_record_model(e.record) }
      end
    end
  end
end
