# frozen_string_literal: true
require "rails_helper"

RSpec.describe("home/index.html.erb", type: :view) do
  it "render div with id root" do
    render

    expect(rendered).to(eq("<div id=\"root\"></div>"))
  end
end
