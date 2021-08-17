# frozen_string_literal: true

source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby "2.7.4"

gem "pg", "~> 1.1"
gem "puma", "~> 5.0"
gem "rails", "~> 6.1.4"
gem "rails-i18n", "~> 6.0"
gem "sass-rails", ">= 6"
gem "turbolinks", "~> 5"
gem "webpacker", "~> 5.0"
gem "bootsnap", ">= 1.4.4", require: false
gem "image_processing", "~> 1.12"

gem "devise"
gem "devise-i18n"
gem "slack-notifier"
gem "administrate-field-active_storage"
gem "administrate-field-enumerize"
gem "tailwindcss-rails"
gem "administrate"
gem "money-rails"
gem "enumerize"
gem "graphql"
gem "pundit"

group :development, :test do
  gem "dotenv-rails"
  gem "pry-byebug", platforms: [:mri, :mingw, :x64_mingw]
  gem "rails-erd"

  gem "rspec-rails"
  gem "faker", "~> 2.18"
  gem "factory_bot_rails", "~> 6.2"

  gem "rubocop-rails", require: false
  gem "rubocop-rspec", require: false
  gem "rubocop-shopify", require: false
end

group :development do
  gem "annotate"
  gem "graphql_playground-rails"
  gem "web-console", ">= 4.1.0"

  gem "foreman"
  gem "listen", "~> 3.3"
  gem "spring"
end

group :test do
  gem "shoulda-matchers", "~> 5.0"
  gem "rspec-graphql_matchers", "~> 1.3"
end
