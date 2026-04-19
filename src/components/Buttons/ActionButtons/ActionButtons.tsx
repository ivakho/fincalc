import { ActionIcon, Flex, Tooltip } from "@mantine/core";
import { IconPencil, IconTrash } from "@tabler/icons-react";
import type { ActionButtonsProps } from "./types";

export const ActionButtons = ({ onUpdate, onDelete }: ActionButtonsProps) => {
  return (
    <Flex gap="sm">
      <Tooltip label="Update" withArrow>
        <ActionIcon
          variant="filled"
          color="blue"
          size="xl"
          aria-label="update"
          onClick={onUpdate}
        >
          <IconPencil size="28" />
        </ActionIcon>
      </Tooltip>
      <Tooltip label="Delete" withArrow>
        <ActionIcon
          variant="filled"
          color="red"
          size="xl"
          aria-label="delete"
          onClick={onDelete}
        >
          <IconTrash size="28" />
        </ActionIcon>
      </Tooltip>
    </Flex>
  );
};
