import type { Contract } from "ethers";
import { ethers } from "ethers";
import BigNumber from "bignumber.js";

import { tokens } from "../constants/pancake/Tokens";
import type { Token } from "../constants/pancake/Tokens";
import { BIG_TEN } from "./getTotalStaked";

// 1 Wei = 1*10^18 Ether
const ONE_BUSD_IN_WEI = ethers.utils.parseUnits("1", 18);

export const getPriceInBusd = async (router: Contract, token: Token) => {
  const response = await fetch(
    `https://api.pancakeswap.info/api/v2/tokens/${token.address["56"]}`
  ).then((r) => r.json());

  return new BigNumber(response.data.price);
};
