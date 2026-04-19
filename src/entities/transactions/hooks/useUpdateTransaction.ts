import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateTransactionApi } from "../api";

export const useUpdateTransaction = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, amount }: { id: number; amount: number }) =>
      updateTransactionApi(id, amount),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["transactions"] });
      queryClient.invalidateQueries({ queryKey: ["transaction"] });
    },
  });
};
