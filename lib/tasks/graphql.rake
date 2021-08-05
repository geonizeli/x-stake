# frozen_string_literal: true
namespace :graphql do
  desc "Dump graphql schema to app/javascript/__generated__/schema.graphql"
  task dump_schema: :environment do
    File.write(
      Rails.root.join("app/javascript/__generated__/schema.graphql"),
      XStakeSchema.to_definition
    )

    puts("app/javascript/__generated__/schema.graphql updated")
  end
end
