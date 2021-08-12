import { tokens } from "../constants/pancake/Tokens";

const tokensList = Object.values(tokens);

export const getCurrencyLogo = (symbol?: string) => {
  const token = tokensList.find((item) => item.symbol === symbol);

  if (token) {
    return `https://pancakeswap.finance/images/tokens/${token.address["56"]}.svg`;
  }
};
