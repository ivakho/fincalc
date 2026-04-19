import { modals } from "@mantine/modals";

export const openDeleteTransactionModal = ({
  transactionId,
  onConfirm,
}: {
  transactionId: number;
  onConfirm: (id: number) => Promise<void>;
}) => {
  modals.openConfirmModal({
    title: "Delete transaction",
    children: "Are you sure you want to delete this transaction?",
    labels: { confirm: "Delete", cancel: "Cancel" },
    confirmProps: { color: "red" },

    onConfirm: async () => {
      await onConfirm(transactionId);
    },
  });
};
