export const formatCake = (value?: string) =>
  parseFloat(value ?? "0").toFixed(5);
