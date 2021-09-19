import BigNumber from "bignumber.js";

import { BLOCKS_PER_YEAR } from "../constants";

type Props = {
  stakingTokenPrice: BigNumber;
  rewardTokenPrice: BigNumber;
  totalStaked: number;
  tokenPerBlock: number;
};

export const getApr = ({
  rewardTokenPrice,
  stakingTokenPrice,
  tokenPerBlock,
  totalStaked,
}: Props) => {
  const totalRewardPricePerYear = new BigNumber(rewardTokenPrice)
    .times(tokenPerBlock)
    .times(BLOCKS_PER_YEAR);

  const totalStakingTokenInPool = new BigNumber(stakingTokenPrice).times(
    totalStaked
  );

  const apr = totalRewardPricePerYear.div(totalStakingTokenInPool).times(100);

  return apr.isNaN() || !apr.isFinite() ? null : apr.toNumber();
};
