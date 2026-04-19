import { modals } from "@mantine/modals";
import { AddModal } from "./AddModal";

export const openAddModal = () => {
  modals.open({
    title: "Add",
    children: <AddModal />,
  });
};
