import React, { useState } from "react";
import type { FC } from "react";
import { graphql } from "babel-plugin-relay/macro";
import { useFragment, useRelayEnvironment } from "react-relay";
import { BigNumber } from "bignumber.js";
import cx from "classnames";

import { useCurrentUser } from "../../../../contexts/UserProvider";
import { Unauthenticated } from "../../../../messages/Unauthenticated";
import type { ExchangePanel_fiatBalances$key } from "./__generated__/ExchangePanel_fiatBalances.graphql";
import type { ExchangePanel_balances$key } from "./__generated__/ExchangePanel_balances.graphql";
import { commitCreateSellCryptoOrderMutation } from "./createSellCryptoOrder";
import { commitCreateBuyCryptoOrderMutation } from "./createBuyCryptoOrder";

const tabBaseStyles =
  "w-full text-base font-bold text-black px-4 py-2 focus:ring-blue-500";

const selectedTabStyles =
  "bg-blue-600 hover:bg-blue-700 rounded-l-frounded-full text-white";

const inputBaseStyles =
  "rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent mb-3";

type Props = {
  fiatBalancesRefs: ExchangePanel_fiatBalances$key;
  balancesRefs: ExchangePanel_balances$key;
};

export const ExchangePanel: FC<Props> = ({
  fiatBalancesRefs,
  balancesRefs,
}) => {
  const { isAuthenticated } = useCurrentUser();
  const environment = useRelayEnvironment();
  const [exchangeOption, setExchangeOption] = useState<"BUY" | "SELL">("BUY");
  const [cryptoDock, setCryptoDock] = useState<string>("0");
  const [fiatDock, setFiatDock] = useState<string>("0.00");

  const fiatBalances = useFragment<ExchangePanel_fiatBalances$key>(
    graphql`
      fragment ExchangePanel_fiatBalances on FiatBalanceConnection {
        edges {
          node {
            amountCents
          }
        }
      }
    `,
    fiatBalancesRefs
  );

  const balances = useFragment<ExchangePanel_balances$key>(
    graphql`
      fragment ExchangePanel_balances on BalanceConnection {
        edges {
          node {
            amount
            currency {
              id
            }
          }
        }
      }
    `,
    balancesRefs
  );

  if (!isAuthenticated) return <Unauthenticated />;

  const [crypto] = balances.edges;
  const [fiat] = fiatBalances.edges;

  const avaliableCrypto = new BigNumber(crypto.node.amount);
  const avaliableFiat = (
    fiat.node.amountCents ? fiat.node.amountCents / 100 : 0
  ).toFixed(2);

  const handleSellTabClick = () => {
    setExchangeOption("SELL");
    setCryptoDock("0");
  };

  const handleBuyTabClick = () => {
    setExchangeOption("BUY");
    setCryptoDock("0");
  };

  const handleCryptoAmountChange = ({
    currentTarget: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    const newCryptoAmount = new BigNumber(value);

    if (
      newCryptoAmount.isLessThanOrEqualTo(avaliableCrypto) &&
      newCryptoAmount.isGreaterThanOrEqualTo(0)
    ) {
      setCryptoDock(value);
    }
  };

  const handleFiatAmountChange = ({
    currentTarget: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    const newFiatAmount = parseInt(value, 10);
    const avaliableFiatAmount = parseInt(avaliableFiat, 10);

    if (newFiatAmount <= avaliableFiatAmount && newFiatAmount >= 0) {
      setFiatDock(value);
    }
  };

  const handleMaxFiatDockButton = () => {
    setFiatDock(avaliableFiat);
  };

  const handleMaxCryptoButton = () => {
    setCryptoDock(avaliableCrypto.toString());
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (exchangeOption === "SELL") {
      commitCreateSellCryptoOrderMutation(environment, {
        amount: cryptoDock,
        currencyId: crypto.node.currency.id,
      });
    }

    if (exchangeOption === "BUY") {
      const [amountCents] = fiatDock.split(".");

      commitCreateBuyCryptoOrderMutation(environment, {
        amountCents: parseInt(amountCents, 10),
        currencyId: crypto.node.currency.id,
      });
    }
  };

  const submitDisabled =
    (exchangeOption === "BUY" && parseInt(fiatDock, 10) <= 0) ||
    (exchangeOption === "SELL" &&
      new BigNumber(cryptoDock).isLessThanOrEqualTo(0));

  return (
    <div className="max-w-lg mx-auto mt-16">
      <div className="flex items-center bg-white rounded-full border border-gray-200 mb-3">
        <button
          type="button"
          className={cx(
            tabBaseStyles,
            "rounded-full",
            exchangeOption === "BUY" && selectedTabStyles
          )}
          onClick={handleBuyTabClick}
        >
          Comprar
        </button>
        <button
          type="button"
          className={cx(
            tabBaseStyles,
            "rounded-full",
            exchangeOption === "SELL" && selectedTabStyles
          )}
          onClick={handleSellTabClick}
        >
          Vender
        </button>
      </div>
      <form
        onSubmit={onSubmit}
        className="bg-white p-4 rounded-2xl border border-gray-200"
      >
        <span className="mb-2">
          {exchangeOption === "SELL" ? "CAKE" : "BRL"} disponível:{" "}
          {exchangeOption === "SELL" ? crypto.node.amount : avaliableFiat}
        </span>
        <div className="flex flex-row">
          {exchangeOption === "BUY" ? (
            <>
              <input
                className={cx(inputBaseStyles)}
                type="number"
                value={fiatDock}
                onChange={handleFiatAmountChange}
              />
              <button
                type="button"
                disabled={fiatDock === avaliableFiat}
                className="flex items-center mb-3 ml-3 font-bold rounded-full text-red-500"
                onClick={handleMaxFiatDockButton}
              >
                Max
              </button>
            </>
          ) : (
            <>
              <input
                className={cx(inputBaseStyles)}
                type="number"
                value={cryptoDock}
                onChange={handleCryptoAmountChange}
              />
              <button
                type="button"
                disabled={avaliableCrypto.isEqualTo(cryptoDock)}
                className="flex items-center mb-3 ml-3 font-bold rounded-full text-red-500"
                onClick={handleMaxCryptoButton}
              >
                Max
              </button>
            </>
          )}
        </div>

        <button
          className="cursor-pointer py-2 px-4 disabled:opacity-50 disabled:cursor-default bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
          type="submit"
          disabled={submitDisabled}
        >
          {exchangeOption === "BUY" ? "Comprar" : "Vender"} CAKE
        </button>
      </form>
    </div>
  );
};