import type { Address, Token } from "../constants/pancake/Tokens";
import type { PoolCategory } from "../constants/Pools";

export type PoolConfig = {
  sousId: number;
  earningToken: Token;
  stakingToken: Token;
  contractAddress: Address;
  poolCategory: PoolCategory;
  tokenPerBlock: string;
  sortOrder?: number;
  harvest?: boolean;
  isFinished?: boolean;
  enableEmergencyWithdraw?: boolean;
};
