# frozen_string_literal: true
module Mutations
  class CreateBuyCryptoOrder < BaseMutation
    field :order, Types::BuyCryptoOrderType, null: true

    argument :order, Inputs::CreateBuyCryptoOrderAttributesInput, required: true

    def resolve(order:)
      ActiveRecord::Base.transaction do
        current_user
          .fiat_balance
          .withdrawal!(order[:amount_cents])

        record = BuyCryptoOrder.create!(
          paid_amount_cents: order[:amount_cents],
          user_id: current_user.id,
        )

        { order: record }
      rescue ActiveRecord::RecordInvalid => e
        { errors: Resolvers::ModelErrors.from_active_record_model(e.record) }
      end
    end
  end
end
