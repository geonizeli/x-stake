import type { Contract } from "ethers";

export const getEndBlock = async (sousChef: Contract) => {
  try {
    return sousChef.bonusEndBlock();
  } catch {
    return 0;
  }
};
