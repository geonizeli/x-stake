# frozen_string_literal: true
module Mutations
  class CreateSellCryptoOrder < BaseMutation
    field :order, Types::SellCryptoOrderType, null: true

    argument :order, Inputs::CreateSellCryptoOrderAttributesInput, required: true

    def resolve(order:)
      amount = BigDecimal(order[:amount])

      ActiveRecord::Base.transaction do
        record = SellCryptoOrder.create!(
          paid_amount: amount,
          user_id: current_user.id,
        )

        { order: record }
      rescue ActiveRecord::RecordInvalid => e
        { errors: Resolvers::ModelErrors.from_active_record_model(e.record) }
      end
    end
  end
end
