# frozen_string_literal: true
module Admin
  class AdminUsersController < Admin::ApplicationController
    def valid_action?(name, resource = resource_class)
      ["edit"].exclude?(name.to_s) && super
    end
  end
end
