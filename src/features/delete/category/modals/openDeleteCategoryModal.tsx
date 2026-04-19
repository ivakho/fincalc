import { modals } from "@mantine/modals";

export const openDeleteCategoryModal = ({
  categoryId,
  categoryName,
  onConfirm,
}: {
  categoryId: number;
  categoryName: string;
  onConfirm: (id: number) => Promise<void>;
}) => {
  modals.openConfirmModal({
    title: "Delete category",
    children: `Delete category "${categoryName}"?`,
    labels: { confirm: "Delete", cancel: "Cancel" },
    confirmProps: { color: "red" },

    onConfirm: async () => {
      await onConfirm(categoryId);
    },
  });
};
