# frozen_string_literal: true

module Dataloader
  class Source < GraphQL::Dataloader::Source
    # rubocop:disable Lint/MissingSuper
    def initialize(model_class)
      @model_class = model_class
    end

    def fetch(ids)
      @model_class
        .where(id: ids)
        .index_by(&:id)
        .slice(*ids)
        .values
    end
  end
end
