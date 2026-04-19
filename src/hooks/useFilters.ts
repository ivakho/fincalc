import { useSearchParams } from "react-router-dom";

export const useFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const type = searchParams.get("type") || "Expense";
  const dateFrom = searchParams.get("date_from") || "";
  const dateTo = searchParams.get("date_to") || "";

  const setType = (nextType: string) => {
    setSearchParams((prev) => ({
      ...Object.fromEntries(prev),
      type: nextType,
    }));
  };

  const setDates = (from: string, to: string) => {
    setSearchParams((prev) => ({
      ...Object.fromEntries(prev),
      date_from: from,
      date_to: to,
    }));
  };

  return {
    type,
    dateFrom,
    dateTo,
    setType,
    setDates,
  };
};
