# frozen_string_literal: true
module Admin
  class CurrenciesController < Admin::ApplicationController
    def valid_action?(name, resource = resource_class)
      ["new", "edit", "destroy"].exclude?(name.to_s) && super
    end
  end
end
