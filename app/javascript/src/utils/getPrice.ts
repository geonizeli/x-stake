import BigNumber from "bignumber.js";

import type { Token } from "../constants/pancake/Tokens";

type Response = {
  updated_at: number;
  data: {
    name: string;
    symbol: string;
    price: string;
    price_BNB: string;
  };
};

export const getPriceInBusd = async (token: Token) => {
  const response: Response = await fetch(
    `https://api.pancakeswap.info/api/v2/tokens/${token.address["56"]}`
  ).then((r) => r.json());

  return new BigNumber(response.data.price);
};
