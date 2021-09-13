import type { FC } from "react";
import React from "react";

import { Table, TableRow } from "../../components";
import { getCurrencyLogo } from "../../utils/getCurrencyLogo";

export const Balance: FC = () => {
  const node = {
    amount: "PUXAR VALOR DA CARTEIRA",
  };

  return (
    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
      <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
        <Table columns={["Moeda", "Saldo"]}>
          <TableRow
            items={[
              <div className="flex items-center" key="pancake coin">
                <div className="flex-shrink-0">
                  <img
                    alt="CAKE icon"
                    src={getCurrencyLogo("CAKE")}
                    className="mx-auto object-cover rounded-full h-10 w-10 "
                  />
                </div>
                <div className="ml-3">
                  <p className="text-gray-900 whitespace-no-wrap">CAKE</p>
                </div>
              </div>,
              node.amount,
            ]}
          />
        </Table>
      </div>
    </div>
  );
};
