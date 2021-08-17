

# frozen_string_literal: true
module Notifiable
  extend ActiveSupport::Concern

  included do
    after_commit on: :create do
      SlackNotifier.ping(notification_message)
    end
  end

  private

  def notification_message
    raise NotImplementedError, "method should be implemented"
  end
end
