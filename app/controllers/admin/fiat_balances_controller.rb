# frozen_string_literal: true
module Admin
  class FiatBalancesController < Admin::ApplicationController
    def valid_action?(name, resource = resource_class)
      ["destroy"].exclude?(name.to_s) && super
    end
  end
end
