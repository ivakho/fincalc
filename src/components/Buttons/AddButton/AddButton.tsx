import { Button, type ButtonProps } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import { openAddModal } from "../../../features";

export const AddButton = (props: ButtonProps) => {
  return (
    <Button
      leftSection={<IconPlus size={16} />}
      size="md"
      onClick={openAddModal}
      {...props}
    >
      Add
    </Button>
  );
};
