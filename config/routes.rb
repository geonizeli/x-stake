# frozen_string_literal: true
Rails.application.routes.draw do
  devise_for :users
  devise_for :admin_users

  namespace :admin do
    resources :users
    resources :balances
    resources :currencies
    resources :admin_users

    root to: "users#index"
  end

  root to: "home#index"
  get "*all" => "home#index", constraints: lambda { |req|
    req.path.exclude?("playground") && req.path.exclude?("rails")
  }

  post "/graphql", to: "graphql#execute"
  mount GraphqlPlayground::Rails::Engine, at: "/playground", graphql_path: "/graphql" if Rails.env.development?
end
