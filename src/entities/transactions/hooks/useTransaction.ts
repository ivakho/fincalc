import { useQuery } from "@tanstack/react-query";
import { fetchTransactionByIdApi } from "../api";

export const useTransaction = (id: number) => {
  return useQuery({
    queryKey: ["transaction", id],
    queryFn: async () => {
      const res = await fetchTransactionByIdApi(id);
      return res.value;
    },
    enabled: !!id,
  });
};
