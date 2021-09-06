# frozen_string_literal: true
module Types
  class MutationType < Types::BaseObject
    field :create_deposit_order, mutation: Mutations::CreateDepositOrder
    field :create_stake_remove_order, mutation: Mutations::CreateStakeRemoveOrder
    field :create_stake_order, mutation: Mutations::CreateStakeOrder
    field :create_sell_crypto_order, mutation: Mutations::CreateSellCryptoOrder
    field :create_buy_crypto_order, mutation: Mutations::CreateBuyCryptoOrder
  end
end
