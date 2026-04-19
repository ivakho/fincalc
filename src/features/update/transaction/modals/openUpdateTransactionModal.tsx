// import { modals } from "@mantine/modals";
// import { NumberInput } from "@mantine/core";

// export const openUpdateTransactionModal = ({
//   transactionId,
//   initialAmount,
//   onConfirm,
// }: {
//   transactionId: number;
//   initialAmount: number;
//   onConfirm: (id: number, amount: number) => Promise<void>;
// }) => {
//   let value = initialAmount;

//   modals.openConfirmModal({
//     title: "Update transaction",
//     children: (
//       <NumberInput
//         defaultValue={initialAmount}
//         label="Amount"
//         onChange={(value) => (value = Number(value))}
//       />
//     ),
//     labels: { confirm: "Save", cancel: "Cancel" },

//     onConfirm: async () => {
//       await onConfirm(transactionId, value);
//     },
//   });
// };
import { modals } from "@mantine/modals";
import { UpdateTransactionForm } from "../form";

export const openUpdateTransactionModal = ({
  transactionId,
  initialAmount,
  onConfirm,
}: {
  transactionId: number;
  initialAmount: number;
  onConfirm: (id: number, amount: number) => Promise<void>;
}) => {
  const handleSubmit = async (amount: number) => {
    await onConfirm(transactionId, amount);
    modals.closeAll();
  };

  modals.open({
    title: "Update transaction",
    children: (
      <UpdateTransactionForm
        initialAmount={initialAmount}
        onSubmit={handleSubmit}
      />
    ),
  });
};