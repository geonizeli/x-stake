# frozen_string_literal: true
class DepositOrderPolicy < ApplicationPolicy
  class Scope < Scope
    def resolve
      return scope.none if user.nil?

      scope.where(user_id: user.id)
    end
  end
end
