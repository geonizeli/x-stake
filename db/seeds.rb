# frozen_string_literal: true

AdminUser.create!(email: "admin@example.com", password: "password")

user = User.create!(
  first_name: "Test",
  last_name: "User",
  email: "user@example.com",
  password: "password"
)

currency = Currency.create!(name: "CAKE")

Balance.create!(
  user_id: user.id,
  currency_id: currency.id,
  amount: (rand * (10000 - 0) + 0)
)

FiatBalance.create!(user_id: user.id, amount_cents: 15000)
