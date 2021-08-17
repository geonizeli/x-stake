# frozen_string_literal: true
module SlackNotifier
  def self.ping(message)
    return if ENV["SLACK_WEBHOOK_URL"].blank?

    Slack::Notifier.new(ENV["SLACK_WEBHOOK_URL"]).ping(message)
  end
end
