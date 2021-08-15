import type { FC } from "react";
import React from "react";
import cx from "classnames";

import type { ProcessStatus } from "../__generated__/ExchangeHistory_buyCryptoOrders.graphql";

export type CryptoExchangeOrderProps = {
  payed?: string;
  received?: string;
  status?: ProcessStatus;
  createdAt?: string;
};

const getStatusTextAndColors = (status: ProcessStatus) => {
  if (status === "PROCESSING") {
    return ["Processando", "text-yellow-900", "bg-yellow-200"];
  }

  if (status === "CANCELED") {
    return ["Cancelado", "text-red-900", "bg-red-200"];
  }

  return ["Completado", "text-green-900", "bg-green-200"];
};

export const CryptoExchangeOrder: FC<CryptoExchangeOrderProps> = ({
  createdAt = "",
  payed = "",
  received = "",
  status = "PROCESSING",
}) => {
  const [label, textStyles, bgStyles] = getStatusTextAndColors(status);

  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-nowrap">{payed}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-nowrap">{received}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-nowrap">{createdAt}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <span
          className={cx(
            "relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight",
            textStyles
          )}
        >
          <span
            aria-hidden="true"
            className={cx("absolute inset-0 opacity-50 rounded-full", bgStyles)}
          />
          <span className="relative">{label}</span>
        </span>
      </td>
    </tr>
  );
};
