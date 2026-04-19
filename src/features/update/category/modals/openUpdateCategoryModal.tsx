// import { modals } from "@mantine/modals";
// import { TextInput } from "@mantine/core";

// export const openUpdateCategoryModal = ({
//   categoryId,
//   initialName,
//   onConfirm,
// }: {
//   categoryId: number;
//   initialName: string;
//   onConfirm: (id: number, name: string) => Promise<void>;
// }) => {
//   let value = initialName;

//   modals.openConfirmModal({
//     title: "Update category",
//     children: (
//       <TextInput
//         defaultValue={initialName}
//         onChange={(e) => (value = e.currentTarget.value)}
//       />
//     ),
//     labels: { confirm: "Save", cancel: "Cancel" },

//     onConfirm: async () => {
//       await onConfirm(categoryId, value);
//     },
//   });
// };

import { modals } from "@mantine/modals";
import { CategoryUpdateForm } from "../form";

export const openUpdateCategoryModal = ({
  categoryId,
  initialName,
  onConfirm,
}: {
  categoryId: number;
  initialName: string;
  onConfirm: (id: number, name: string) => Promise<void>;
}) => {
  const handleSubmit = async (name: string) => {
    await onConfirm(categoryId, name);
    modals.closeAll();
  };

  modals.open({
    title: "Update category",
    children: (
      <CategoryUpdateForm initialName={initialName} onSubmit={handleSubmit} />
    ),
  });
};
