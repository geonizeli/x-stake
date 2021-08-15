# frozen_string_literal: true
module Types
  class ProcessStatusEnum < Types::BaseEnum
    graphql_name "ProcessStatus"

    value "PROCESSING", value: "processing"
    value "COMPLETED", value: "completed"
    value "CANCELED", value: "canceled"
  end
end
