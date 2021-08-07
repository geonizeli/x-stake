# frozen_string_literal: true
module Auth
  class Profile
    attr_reader :id, :email

    def initialize(attributes)
      @id = attributes[:sub]
      @email = attributes[:email]
    end

    def user
      @user ||= User.find_by(email: email)
    end
  end
end
