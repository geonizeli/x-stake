# frozen_string_literal: true
Rails.application.routes.draw do
  namespace :admin do
    resources :admin_users

    root to: "admin_users#index"
  end

  devise_for :admin_users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
