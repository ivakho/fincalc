import { useQuery } from "@tanstack/react-query";
import { fetchCategoriesApi } from "../api";
import type { CategoryTotal } from "../model/types";

// export const useCategories = (
//   type: string,
//   dateFrom: string,
//   dateTo: string,
// ) => {
//   return useQuery<CategoryTotal[]>({
//     queryKey: ["categories", type, dateFrom, dateTo],
//     queryFn: async () => {
//       const res = await fetchCategoriesApi(type, dateFrom, dateTo);
//       return res.value;
//     },
//     enabled: !!type && !!dateFrom && !!dateTo,
//   });
// };

type CategoriesResponse = {
  categories: CategoryTotal[];
  total: number;
};

export const useCategories = (
  type: string,
  dateFrom: string,
  dateTo: string,
) => {
  return useQuery<CategoryTotal[], Error, CategoriesResponse>({
    queryKey: ["categories", type, dateFrom, dateTo],
    queryFn: async () => {
      const res = await fetchCategoriesApi(type, dateFrom, dateTo);
      return res.value;
    },
    select: (data) => {
      const filtered = data.filter((c) => c.total !== 0);

      const total = filtered.reduce((acc, c) => acc + c.total, 0);

      return {
        categories: filtered,
        total,
      };
    },
    enabled: !!type && !!dateFrom && !!dateTo,
  });
};
