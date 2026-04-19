import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCategoryApi } from "../api";
import { useNavigate } from "react-router-dom";

export const useDeleteCategory = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (id: number) => deleteCategoryApi(id),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
      queryClient.invalidateQueries({ queryKey: ["category"] });
      navigate("/");
    },
  });
};
