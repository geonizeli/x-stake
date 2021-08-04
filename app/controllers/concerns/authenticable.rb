# frozen_string_literal: true
module Authenticable
  def current_auth
    @current_auth ||= Auth::Authenticate.new(bearer_token).profile
  end

  def bearer_token
    pattern = /^Bearer /
    header  = request.headers["Authorization"]
    header.gsub(pattern, "") if header&.match(pattern)
  end
end
