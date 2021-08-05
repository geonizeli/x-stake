# frozen_string_literal: true
module Auth
  class Authenticate
    attr_reader :jwt_token

    def initialize(jwt_token)
      @jwt_token = jwt_token
    end

    def profile
      return nil if jwt_token.blank?

      Auth0Client.find_profile(jwt_token)
    end
  end
end
