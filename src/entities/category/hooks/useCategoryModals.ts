import { openUpdateCategoryModal, openDeleteCategoryModal } from "../../../features";
import type { Category } from "../model/types";
import { useDeleteCategory } from "./useDeleteCategory";
import { useUpdateCategory } from "./useUpdateCategory";

export const useCategoryModals = () => {
  const update = useUpdateCategory();
  const remove = useDeleteCategory();

  const onUpdate = (category: Category) => {
    openUpdateCategoryModal({
      categoryId: category.id,
      initialName: category.name,
      onConfirm: (id, name) =>
        update.mutateAsync({ id, name }),
    });
  };

  const onDelete = (category: Category) => {
    openDeleteCategoryModal({
      categoryId: category.id,
      categoryName: category.name,
      onConfirm: (id) => remove.mutateAsync(id),
    });
  };

  return { onUpdate, onDelete };
};