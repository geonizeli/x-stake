# frozen_string_literal: true
module Mutations
  class CreateStakeRemoveOrder < BaseMutation
    field :order, Types::StakeOrderType, null: true

    argument :order, Inputs::CreateStakeOrderAttributesInput, required: true

    def resolve(order:)
      currency_id = decode_id(order[:currency_id])
      amount = BigDecimal(order[:amount])

      ActiveRecord::Base.transaction do
        record = StakeOrder.find_or_initialize_by(
          pool_name: order[:pool_name],
          user_id: current_user.id,
          currency_id: currency_id,
          status: :processing
        )

        record.amount += amount
        record.save!

        { order: record }
      rescue ActiveRecord::RecordInvalid => e
        { errors: Resolvers::ModelErrors.from_active_record_model(e.record) }
      end
    end
  end
end
