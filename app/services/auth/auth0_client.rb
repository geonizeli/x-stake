# frozen_string_literal: true
module Auth
  class Auth0Client
    class << self
      def find_profile(token)
        Profile.new(user_profile_attributes(token))
      end

      def user_profile_attributes(token)
        HTTParty.get(
          "https://#{ENV["AUTH_DOMAIN"]}/userinfo",
          headers: {
            "Content-Type" => "application/json",
            "Authorization": "Bearer #{token}",
          }
        ).with_indifferent_access
      end
    end
  end
end
