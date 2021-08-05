# frozen_string_literal: true
require "rails_helper"

RSpec.describe(Mutations::CreateUser) do
  describe "#resolve" do
    let(:mutation_string) do
      <<~GQL
        mutation($input: CreateUserInput!) {
          createUser(input: $input) {
            success
            errors
          }
        }
      GQL
    end

    let(:context) do
      {
        current_auth: Auth::Profile.new({
          id: "_",
          email: "user@example.com",
        }),
      }
    end

    let(:variables) do
      {
        input: { user: {
          firstName: "First Name",
          lastName: "Last Name",
        } },
      }
    end

    context "when current_auth is not being used by any user" do
      it "create a user to auth" do
        result = XStakeSchema.execute(
          mutation_string,
          variables: variables,
          context: context
        ).to_h

        expect(result["data"]["createUser"]["success"]).to(eq(true))
      end
    end

    context "when auth is being used by no users" do
      it "returns error" do
        User.create(
          first_name: "First Name",
          last_name: "Last Name",
          email: "user@example.com"
        )

        result = XStakeSchema.execute(
          mutation_string,
          variables: variables,
          context: context
        ).to_h

        expect(result["data"]["createUser"]["success"]).to(eq(false))
        expect(result["data"]["createUser"]["errors"]).to(eq(["Validation failed: Email has already been taken"]))
      end
    end
  end
end
