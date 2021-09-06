# frozen_string_literal: true
require "administrate/base_dashboard"

class DepositOrderDashboard < Administrate::BaseDashboard
  # ATTRIBUTE_TYPES
  # a hash that describes the type of each of the model's fields.
  #
  # Each different type represents an Administrate::Field object,
  # which determines how the attribute is displayed
  # on pages throughout the dashboard.
  ATTRIBUTE_TYPES = {
    user: Field::BelongsTo,
    id: Field::Number,
    status: Field::String,
    received_amount_cents: Field::Number,
    paid_amount_cents: Field::Number,
    created_at: Field::DateTime,
    updated_at: Field::DateTime,
    transaction_id: Field::String,
  }.freeze

  # COLLECTION_ATTRIBUTES
  # an array of attributes that will be displayed on the model's index page.
  #
  # By default, it's limited to four items to reduce clutter on index pages.
  # Feel free to add, remove, or rearrange items.
  COLLECTION_ATTRIBUTES = [:user, :id, :status, :transaction_id].freeze

  # SHOW_PAGE_ATTRIBUTES
  # an array of attributes that will be displayed on the model's show page.
  SHOW_PAGE_ATTRIBUTES = [:user, :id, :status, :transaction_id, :received_amount_cents, :paid_amount_cents, :created_at,
                          :updated_at,].freeze

  # FORM_ATTRIBUTES
  # an array of attributes that will be displayed
  # on the model's form (`new` and `edit`) pages.
  FORM_ATTRIBUTES = [:user, :status, :received_amount_cents, :paid_amount_cents, :transaction_id].freeze

  # COLLECTION_FILTERS
  # a hash that defines filters that can be used while searching via the search
  # field of the dashboard.
  #
  # For example to add an option to search for open resources by typing "open:"
  # in the search field:
  #
  #   COLLECTION_FILTERS = {
  #     open: ->(resources) { resources.where(open: true) }
  #   }.freeze
  COLLECTION_FILTERS = {}.freeze

  # Overwrite this method to customize how deposit orders are displayed
  # across all pages of the admin dashboard.
  #
  # def display_resource(deposit_order)
  #   "DepositOrder ##{deposit_order.id}"
  # end
end
