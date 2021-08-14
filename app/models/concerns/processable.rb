# frozen_string_literal: true
module Processable
  extend Enumerize
  extend ActiveSupport::Concern

  included do
    enumerize :status, in: [:processing, :completed, :canceled], default: :processing
  end

  def processing?
    status == :processing
  end

  def completed?
    status == :completed
  end

  def canceled?
    status == :canceled
  end
end
