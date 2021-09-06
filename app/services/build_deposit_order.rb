# frozen_string_literal: true
class BuildDepositOrder
  DEPOSIT_FEE = 0.05

  attr_reader :paid_amount_cents, :user_id

  def initialize(paid_amount_cents:, user_id:)
    @paid_amount_cents = paid_amount_cents
    @user_id = user_id
  end

  def build
    DepositOrder.new(
      user_id: user_id,
      paid_amount_cents: paid_amount_cents,
      received_amount_cents: paid_amount_cents - (paid_amount_cents * DEPOSIT_FEE)
    )
  end
end
