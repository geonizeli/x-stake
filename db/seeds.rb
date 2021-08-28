# frozen_string_literal: true

AdminUser.create!(email: "admin@example.com", password: "password")

User.create!(
  first_name: "Test",
  last_name: "User",
  email: "user@example.com",
  password: "password"
)
