# frozen_string_literal: true
module Inputs
  class PredicateInput < Types::BaseInputObject
    # https://github.com/activerecord-hackery/ransack#search-matchers
    # add others if necessary
    argument :eq, String, "Equal", required: false
    argument :lt, Float, "Less than", required: false
  end
end
