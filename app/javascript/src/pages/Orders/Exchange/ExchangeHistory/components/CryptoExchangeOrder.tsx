import type { FC } from "react";
import React from "react";
import cx from "classnames";

import type { ProcessStatus } from "../__generated__/ExchangeHistory_buyCryptoOrders.graphql";
import { getStatusTextAndColors } from "../../../utils/processStatus";

export type CryptoExchangeOrderProps = {
  payed?: string;
  received?: string;
  status?: ProcessStatus;
  createdAt?: string;
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
