import BigNumber from "bignumber.js";

export const BSC_BLOCK_TIME = 3;
export const BLOCKS_PER_YEAR = new BigNumber(
  (60 / BSC_BLOCK_TIME) * 60 * 24 * 365
);
