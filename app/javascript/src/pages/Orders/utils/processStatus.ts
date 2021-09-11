type ProcessStatus = "CANCELED" | "COMPLETED" | "PROCESSING";

export const getStatusTextAndColors = (status: ProcessStatus) => {
  if (status === "PROCESSING") {
    return ["Processando", "text-yellow-900", "bg-yellow-200"];
  }

  if (status === "CANCELED") {
    return ["Cancelado", "text-red-900", "bg-red-200"];
  }

  if (status === "COMPLETED") {
    return ["Completado", "text-green-900", "bg-green-200"];
  }

  return ["", "", ""];
};
