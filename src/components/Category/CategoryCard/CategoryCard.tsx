import { Card, Divider, Group, Stack, Title } from "@mantine/core";
import { useParams } from "react-router-dom";
import { useCategory, useCategoryModals } from "../../../entities";
import {
  ActionButtons,
  AsyncState,
  TransactionList,
} from "../../../components";

export const CategoryCard = () => {
  const { id } = useParams();
  const categoryID = Number(id);

  const { data, isLoading, isError } = useCategory(categoryID);
  const { onUpdate, onDelete } = useCategoryModals();

  return (
    <AsyncState loading={isLoading} error={isError}>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Stack gap="md">
          <Group justify="space-between" wrap="nowrap">
            <Title order={2} lineClamp={1}>
              {data?.name}
            </Title>
            <ActionButtons
              onUpdate={() => data && onUpdate(data)}
              onDelete={() => data && onDelete(data)}
            />
          </Group>
          <Divider />
          <TransactionList />
        </Stack>
      </Card>
    </AsyncState>
  );
};
