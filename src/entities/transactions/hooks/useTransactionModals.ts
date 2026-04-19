import type { Transaction } from "../model/types";
import {
  openUpdateTransactionModal,
  openDeleteTransactionModal,
} from "../../../features";

import { useUpdateTransaction } from "./useUpdateTransaction";
import { useDeleteTransaction } from "./useDeleteTransaction";

export const useTransactionModals = () => {
  const update = useUpdateTransaction();
  const remove = useDeleteTransaction();

  const onUpdate = (transaction: Transaction) => {
    openUpdateTransactionModal({
      transactionId: transaction.id,
      initialAmount: transaction.amount,
      onConfirm: (id, amount) => update.mutateAsync({ id, amount }),
    });
  };

  const onDelete = (transaction: Transaction) => {
    openDeleteTransactionModal({
      transactionId: transaction.id,
      onConfirm: (id) => remove.mutateAsync(id),
    });
  };

  return { onUpdate, onDelete };
};
