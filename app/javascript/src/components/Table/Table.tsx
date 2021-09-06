import type { FC } from "react";
import React from "react";

type Props = {
  columns: string[];
};

export const Table: FC<Props> = ({ columns, children }) => {
  return (
    <table className="min-w-full leading-normal">
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th
              key={index}
              scope="col"
              className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
            >
              {column}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
};
