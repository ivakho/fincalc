export const getTypeEndpoint = (type: string) => {
  if (type === "Expense") return "getExpense";
  if (type === "Income") return "getIncome";
  return "";
};
