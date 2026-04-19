import { useQuery } from "@tanstack/react-query";
import { fetchCategoryByIdApi } from "../api";

export const useCategory = (id: number) => {
  return useQuery({
    queryKey: ["category", id],
    queryFn: async () => {
      const res = await fetchCategoryByIdApi(id);
      return res.value;
    },
    enabled: !!id,
  });
};
