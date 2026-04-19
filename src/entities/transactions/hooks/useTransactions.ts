// import { useEffect, useState } from "react";
// import { fetchTransactionsApi } from "../api/transactions";
// import type { Transactions } from "../model/types";

// export const useTransactions = (
//   categoryID: number,
//   type: string,
//   dateFrom: string,
//   dateTo: string,
// ) => {
//   const [transactions, setTransactions] = useState<Transactions>({
//     value: [],
//     total: 0,
//   });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     if (!categoryID || !type || !dateFrom || !dateTo) return;

//     const fetchData = async () => {
//       try {
//         setLoading(true);
//         setError(null);

//         const data = await fetchTransactionsApi(
//           categoryID,
//           type,
//           dateFrom,
//           dateTo,
//         );
//         setTransactions(data);
//         console.log(data, "transactions");
//       } catch (err) {
//         setError("Failed to load transactions");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [categoryID, type, dateFrom, dateTo]);

//   return { transactions, loading, error };
// };

import { useQuery } from "@tanstack/react-query";
import { fetchTransactionsApi } from "../api";
import type { Transactions } from "../model/types";

export const useTransactions = (
  categoryID: number,
  type: string,
  dateFrom: string,
  dateTo: string,
) => {
  return useQuery<Transactions>({
    queryKey: ["transactions", categoryID, type, dateFrom, dateTo],
    queryFn: () => fetchTransactionsApi(categoryID, type, dateFrom, dateTo),
    enabled: !!categoryID && !!type && !!dateFrom && !!dateTo,
  });
};
