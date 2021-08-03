# frozen_string_literal: true
Rails.application.routes.draw do
  mount GraphqlPlayground::Rails::Engine, at: "/playground", graphql_path: "/graphql" if Rails.env.development?

  post "/graphql", to: "graphql#execute"

  devise_for :admin_users

  namespace :admin do
    resources :admin_users

    root to: "admin_users#index"
  end
end
