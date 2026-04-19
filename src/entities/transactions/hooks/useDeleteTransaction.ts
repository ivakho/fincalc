import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTransactionApi } from "../api";
import { useNavigate } from "react-router-dom";

export const useDeleteTransaction = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (id: number) => deleteTransactionApi(id),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["transactions"] });
      queryClient.invalidateQueries({ queryKey: ["transaction"] });
      navigate("/");
    },
  });
};
