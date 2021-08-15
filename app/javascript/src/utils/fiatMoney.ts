export const centsToUnit = (value?: number | null) => {
  if (!value) return "0.00";

  return (value / 100).toFixed(2);
};
