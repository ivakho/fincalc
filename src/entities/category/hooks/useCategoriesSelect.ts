import { useQuery } from "@tanstack/react-query";
import { fetchAllCategoriesApi } from "../api";

export const useCategoriesSelect = () => {
  return useQuery({
    queryKey: ["categories-all"],
    queryFn: async () => {
      const res = await fetchAllCategoriesApi();

      return res.value.map((c: any) => ({
        value: String(c.id),
        label: c.name,
      }));
    },
  });
};
