import classNames from "classnames";
import type { FC, ReactNode } from "react";
import React from "react";

type Props = {
  items?: Array<ReactNode | string>;
  id?: string;
  onClick?: (itemId: string) => void;
};

export const TableRow: FC<Props> = ({ items, id, onClick }) => {
  const handleClick = () => {
    if (onClick && id) {
      onClick(id);
    }
  };

  return (
    <tr
      onClick={handleClick}
      className={classNames(
        "bg-white",
        onClick &&
          "bg-white hover:bg-gray-100 cursor-pointer transition duration-500"
      )}
    >
      {items?.map((item, index) => (
        <td key={index} className="px-5 py-5 border-b border-gray-200 text-sm">
          <p className="text-gray-900 whitespace-nowrap">{item}</p>
        </td>
      ))}
    </tr>
  );
};
