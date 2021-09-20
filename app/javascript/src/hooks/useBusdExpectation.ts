import { useEffect, useState } from "react";

import type { Token } from "../constants/pancake/Tokens";
import { getPriceInBusd } from "../utils/getPrice";

export const useBusdExpectation = (token: Token, amount: number) => {
  const [isLoading, setIsLoading] = useState(true);
  const [total, setTotal] = useState<string>("0.00");

  useEffect(() => {
    getPriceInBusd(token).then((price) => {
      setTotal(price.multipliedBy(amount).toFixed(2));
      setIsLoading(false);
    });
  });

  return {
    total,
    isLoading,
  };
};
