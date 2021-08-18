# frozen_string_literal: true
module Admin
  class ApplicationController < Administrate::ApplicationController
    before_action :authenticate_admin_user!
    before_action :set_paper_trail_whodunnit

    # used by #set_paper_trail_whodunnit
    def current_user
      # add admin prefix to differentiate from a customer
      "admin/#{current_admin_user.id}"
    end
  end
end
