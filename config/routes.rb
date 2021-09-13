# frozen_string_literal: true
require "sidekiq/web"

Rails.application.routes.draw do
  devise_for :users
  devise_for :admin_users

  namespace :admin do
    resources :users
    resources :fiat_balances
    resources :buy_crypto_orders
    resources :sell_crypto_orders
    resources :stake_orders
    resources :deposit_orders
    resources :admin_users

    root to: "users#index"
  end

  root to: "home#index"
  get "*all" => "home#index", constraints: lambda { |req|
    ["playground", "rails", "sidekiq"].filter do |path|
      req.path.include?(path)
    end.blank?
  }

  post "/graphql", to: "graphql#execute"

  if Rails.env.development?
    mount GraphqlPlayground::Rails::Engine, at: "/playground", graphql_path: "/graphql"
    mount Sidekiq::Web => "/sidekiq"
  end
end
