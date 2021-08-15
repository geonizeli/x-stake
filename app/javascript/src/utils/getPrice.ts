import type { Contract } from "ethers";
import { ethers } from "ethers";

import { tokens } from "../constants/pancake/Tokens";
import type { Token } from "../constants/pancake/Tokens";

// 1 Wei = 1*10^18 Ether
const ONE_BUSD_IN_WEI = ethers.utils.parseUnits("1", 18);

export const getPriceInBusd = async (router: Contract, token: Token) => {
  try {
    const result = await router.getAmountsOut(ONE_BUSD_IN_WEI, [
      token.address["56"],
      tokens.busd.address["56"],
    ]);

    return result[1].toString() / 1e18;
  } catch {
    return 0;
  }
};
