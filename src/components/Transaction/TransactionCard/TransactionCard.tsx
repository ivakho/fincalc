import { Title, Text, Badge, Card, Divider, Group, Stack } from "@mantine/core";
import { useParams } from "react-router-dom";
import { useTransaction, useTransactionModals } from "../../../entities";
import { ActionButtons, AsyncState, Digits } from "../../../components";
import dayjs from "dayjs";

export const TransactionCard = () => {
  const { id } = useParams();
  const transactionId = Number(id);

  const { data, isLoading, isError } = useTransaction(transactionId);

  const { onUpdate, onDelete } = useTransactionModals();

  return (
    <AsyncState loading={isLoading} error={isError}>
      {data && (
        <Card shadow="sm" padding="lg" radius="lg" withBorder>
          <Stack gap="md">
            <Group justify="space-between" wrap="nowrap">
              <Title order={2}>Transaction</Title>
              <ActionButtons
                onUpdate={() => data && onUpdate(data)}
                onDelete={() => data && onDelete(data)}
              />
            </Group>
            <Divider />
            <Stack gap={4}>
              <Text size="sm" c="dimmed">
                Amount
              </Text>
              <Digits fw={700} size="xl" value={data.amount} />
            </Stack>
            <Stack gap={4}>
              <Text size="sm" c="dimmed">
                Category
              </Text>
              <Badge size="lg" variant="light">
                {data.category_name}
              </Badge>
            </Stack>
            <Stack gap={4}>
              <Text size="sm" c="dimmed">
                Created at
              </Text>
              <Text>{dayjs(data.created_at).format("MMMM D, YYYY")}</Text>
            </Stack>
          </Stack>
        </Card>
      )}
    </AsyncState>
  );
};
