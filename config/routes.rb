# frozen_string_literal: true
Rails.application.routes.draw do
  devise_for :admin_users

  namespace :admin do
    resources :users
    resources :admin_users

    root to: "users#index"
  end

  root to: "home#index"
  get "*all" => "home#index", constraints: lambda { |req|
    Rails.env.development? ? req.path.exclude?("playground") : req
  }

  post "/graphql", to: "graphql#execute"
  mount GraphqlPlayground::Rails::Engine, at: "/playground", graphql_path: "/graphql" if Rails.env.development?
end
