
import type { Contract } from "ethers";
import { ethers } from "ethers";

import { tokens } from "../constants/pancake/Tokens";
import type { Token } from "../constants/pancake/Tokens";

export const getEndBlock = async (sousChef: Contract) => {
  try {
    return sousChef.bonusEndBlock();
  } catch {
    return 0;
  }
};
