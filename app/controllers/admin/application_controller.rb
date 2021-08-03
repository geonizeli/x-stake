# frozen_string_literal: true
module Admin
  class ApplicationController < Administrate::ApplicationController
    before_action :authenticate_admin_user!
  end
end
