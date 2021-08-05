# frozen_string_literal: true
module Admin
  class UsersController < Admin::ApplicationController
    def valid_action?(name, resource = resource_class)
      ["new", "destroy"].exclude?(name.to_s) && super
    end
  end
end
