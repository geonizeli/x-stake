# frozen_string_literal: true
module Mutations
  class CreateSellCryptoOrder < BaseMutation
    field :order, Types::SellCryptoOrderType, null: true

    argument :order, Inputs::CreateSellCryptoOrderAttributesInput, required: true

    def resolve(order:)
      currency_id = decode_id(order[:currency_id])
      amount = BigDecimal(order[:amount])

      ActiveRecord::Base.transaction do
        current_user.balances.find_by!(currency_id: currency_id)
          .withdrawal!(amount)

        record = SellCryptoOrder.create(
          paid_amount: amount,
          currency_id: currency_id,
          user_id: current_user.id,
        )

        { order: record }
      rescue ActiveRecord::RecordInvalid => e
        { errors: Resolvers::ModelErrors.from_active_record_model(e.record) }
      end
    end
  end
end
