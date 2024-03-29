# frozen_string_literal: true
class BscClient
  include HTTParty

  base_uri "api-eu1.tatum.io/v3"

  def initialize
    @headers = {
      "x-api-key": ENV["TATUM_API_KEY"],
    }
  end

  def token_balance(contract:, digits:, wallet_address:)
    result = self.class.get(
      "https://api-eu1.tatum.io/v3/blockchain/token/balance/BSC/#{contract}/#{wallet_address}",
      headers: @headers
    ).parsed_response["balance"]

    (result.to_f / (10**digits)).round(5)
  end
end
