# frozen_string_literal: true
require "administrate/base_dashboard"

class BuyCryptoOrderDashboard < Administrate::BaseDashboard
  # ATTRIBUTE_TYPES
  # a hash that describes the type of each of the model's fields.
  #
  # Each different type represents an Administrate::Field object,
  # which determines how the attribute is displayed
  # on pages throughout the dashboard.
  ATTRIBUTE_TYPES = {
    user: Field::BelongsTo,
    currency: Field::BelongsTo,
    id: Field::Number,
    status: Field::Enumerize,
    paid_amount_cents: Field::Number,
    received_amount: Field::String.with_options(searchable: false),
    created_at: Field::DateTime,
    updated_at: Field::DateTime,
  }.freeze

  # COLLECTION_ATTRIBUTES
  # an array of attributes that will be displayed on the model's index page.
  #
  # By default, it's limited to four items to reduce clutter on index pages.
  # Feel free to add, remove, or rearrange items.
  COLLECTION_ATTRIBUTES = [:user, :currency, :id, :status].freeze

  # SHOW_PAGE_ATTRIBUTES
  # an array of attributes that will be displayed on the model's show page.
  SHOW_PAGE_ATTRIBUTES = [:user, :currency, :id, :status, :paid_amount_cents, :received_amount, :created_at,
                          :updated_at,].freeze

  # FORM_ATTRIBUTES
  # an array of attributes that will be displayed
  # on the model's form (`new` and `edit`) pages.
  FORM_ATTRIBUTES = [:user, :currency, :status, :paid_amount_cents, :received_amount].freeze

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

  # Overwrite this method to customize how buy crypto orders are displayed
  # across all pages of the admin dashboard.
  #
  # def display_resource(buy_crypto_order)
  #   "BuyCryptoOrder ##{buy_crypto_order.id}"
  # end
end
