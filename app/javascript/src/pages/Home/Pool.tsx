import type { FC } from "react";
import React from "react";

import type { PoolConfig } from "../../types";
import { useBsc } from "../../contexts/BscProvider";
import { getApr } from "../../utils/apr";
import { getPriceInBusd } from "../../utils/getPrice";
import { getTotalStaked } from "../../utils/getTotalStaked";
import { StakeOrderModal } from "./StakeOrderModal";

const INVESTMENT_FEE_PERCENTAGE = 20;

type PoolProps = {
  pool: PoolConfig;
  balance: string;
};

export const Pool: FC<PoolProps> = ({ pool, balance }) => {
  const {
    provider,
    pancake: { router },
  } = useBsc();

  const [apr, setApr] = React.useState<{
    value: string | null;
    loading: boolean;
  }>({
    value: null,
    loading: true,
  });

  React.useEffect(() => {
    (async () => {
      const stakingPrice = await getPriceInBusd(router, pool.stakingToken);
      const earningPrice = await getPriceInBusd(router, pool.earningToken);

      const totalStaked = await getTotalStaked(provider, pool);

      const aprValue = getApr({
        rewardTokenPrice: earningPrice,
        stakingTokenPrice: stakingPrice,
        tokenPerBlock: parseFloat(pool.tokenPerBlock) / 1e-18,
        totalStaked,
      });

      if (aprValue) {
        setApr({
          loading: false,
          value: (aprValue - INVESTMENT_FEE_PERCENTAGE).toFixed(2),
        });
      }
    })();
  }, [pool, provider, router]);

  return (
    <div
      key={pool.sousId}
      id={pool.sousId.toString()}
      className="flex items-center w-full h-auto bg-white px-16 p-4 rounded-xl shadow flex-col relative z-0 overflow-hidden hover:shadow-lg transition-all duration-300"
    >
      <div
        className="box-border h-full w-full absolute left-0 top-0 rounded-xl opacity-20 filter blur-2xl bg-cover"
        style={{
          backgroundImage: `url('https://pancakeswap.finance/images/tokens/${pool.earningToken.address["56"]}.svg')`,
          backgroundPositionX: "50%",
          backgroundPositionY: "50%",
          backgroundSize: "125%",
          zIndex: -1,
        }}
      />
      <div className="relative w-24 h-24">
        <img
          className="shadow-xl rounded-full w-24 absolute"
          src={`https://pancakeswap.finance/images/tokens/${pool.earningToken.address["56"]}.svg`}
          alt={`${pool.earningToken.symbol} icon`}
        />
        <img
          className="shadow-xl rounded-full w-10 absolute bottom-0 right-0"
          src={`https://pancakeswap.finance/images/tokens/${pool.stakingToken.address["56"]}.svg`}
          alt={`${pool.earningToken.symbol} icon`}
        />
      </div>
      <div className="mt-4 p-2">
        <p>
          <span className="font-medium">Investir:</span>
          {pool.stakingToken.symbol}
        </p>
        <p>
          <span className="font-medium">Receber:</span>
          {pool.earningToken.symbol}
        </p>
        <div className="flex items-center">
          <span className="font-medium mr-1">Rendimento:</span>
          {apr.loading ? (
            <div className="w-10 h-5 inline-block animate-pulse bg-gray-300 rounded" />
          ) : (
            `${apr.value}%`
          )}
        </div>
        <StakeOrderModal
          poolName={pool.earningToken.symbol}
          balance={balance}
        />
      </div>
    </div>
  );
};
