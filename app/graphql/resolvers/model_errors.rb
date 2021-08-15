# frozen_string_literal: true
module Resolvers
  class ModelErrors
    attr_reader :full_messages, :field_name, :messages, :path

    def initialize(args)
      @full_messages = args[:full_messages]
      @field_name = args[:field_name]
      @messages = args[:messages]
      @path = args[:path]
    end

    def self.from_active_record_model(model)
      return if model&.errors.blank?

      model.errors.messages.map do |field, messages|
        new(
          full_messages: model.errors.full_messages_for(field),
          field_name: field,
          messages: messages,
          path: ["attributes", field]
        )
      end
    end

    def self.from_active_record_model_errors(errors)
      return if errors.blank?

      errors.messages.map do |field, messages|
        new(
          full_messages: errors.full_messages_for(field),
          field_name: field,
          messages: messages,
          path: ["attributes", field]
        )
      end
    end
  end
end
