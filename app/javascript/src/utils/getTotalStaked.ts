import { ethers } from "ethers";
import BigNumber from "bignumber.js";

import erc20 from "../abi/erc20.json";
import type { PoolConfig } from "../types";

export const BIG_TEN = new BigNumber(10);

export const getTotalStaked = async (
  provider: ethers.providers.Provider,
  pool: PoolConfig
) => {
  if (pool.stakingToken.symbol === "BNB") {
    // TODO: BNB
    return 0;
  }

  const contract = new ethers.Contract(
    pool.stakingToken.address["56"],
    erc20,
    provider
  );

  try {
    const result = await contract.balanceOf(pool.contractAddress["56"]);

    return new BigNumber(result.toJSON().hex)
      .dividedBy(BIG_TEN.pow(pool.stakingToken.decimals))
      .toNumber();
  } catch {
    return 0;
  }
};
