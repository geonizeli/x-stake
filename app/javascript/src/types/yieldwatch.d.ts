/* eslint-disable @typescript-eslint/no-explicit-any */
type WatchBalance = {
  USDPrice: number;
  totalBalance: number;
  maxMonitorValue: number;
  walletBalance: number;
  watchFromLP: number;
};

type Currencies = {
  EUR: number;
  RMB: number;
  JPY: number;
  GBP: number;
  BTCB: number;
  WBNB: number;
  BRL: number;
  AUD: number;
  HKD: number;
  SGD: number;
  RUB: number;
  KRW: number;
  CAD: number;
  THB: number;
  CHF: number;
  IDR: number;
  TRY: number;
  TWD: number;
};

type TotalUSDValues = {
  deposit: number;
  yield: number;
  total: number;
};

type Vaults = {
  totalUSDValues: TotalUSDValues;
  vaults: any[];
};

type TotalUSDValues2 = {
  deposit: number;
  yield: number;
  total: number;
};

type LPStaking = {
  totalUSDValues: TotalUSDValues2;
  vaults: any[];
};

type TotalUSDValues3 = {
  deposit: number;
  yield: number;
  total: number;
};

type Staking = {
  totalUSDValues: TotalUSDValues3;
  vaults: any[];
};

type PancakeSwap = {
  vaults: Vaults;
  LPStaking: LPStaking;
  staking: Staking;
};

type WalletBalance = {
  totalUSDValue: number;
  balances: any[];
};

type Result = {
  watchBalance: WatchBalance;
  currencies: Currencies;
  PancakeSwap: PancakeSwap;
};

export type YieldwatchResponse = {
  status: "0" | "1";
  message: string;
  result: Result;
};
