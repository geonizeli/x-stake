# frozen_string_literal: true
module Auth
  class Profile
    attr_reader :id, :email

    def initialize(attributes)
      @id = attributes[:sub]
      @email = attributes[:email]
    end

    def customer
      @customer ||= Customer.find_by(email: email, auth_id: id)
    end
  end
end
