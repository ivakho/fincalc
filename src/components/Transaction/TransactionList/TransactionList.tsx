import { Stack, Group, NavLink, Text, Flex } from "@mantine/core";
import { useTransactions } from "../../../entities";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useFilters } from "../../../hooks";
import { AsyncState, Digits } from "../../../components";
import { navigateWithSearch } from "../../../utils";
import dayjs from "dayjs";

export const TransactionList = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const categoryID = Number(id);
  const [searchParams] = useSearchParams();
  const { type, dateFrom, dateTo } = useFilters();
  const { data, isLoading, isError } = useTransactions(
    categoryID,
    type,
    dateFrom,
    dateTo,
  );

  const handleTransactionClick = (transactionID: number) => {
    navigateWithSearch(
      navigate,
      `/transaction/${transactionID}`,
      `category_id=${categoryID}&${searchParams.toString()}`,
    );
  };

  return (
    <AsyncState loading={isLoading} error={isError}>
      <Stack gap="sm">
        {data?.value.map((transaction) => (
          <NavLink
            key={transaction.id}
            label={
              <Group justify="space-between">
                <Text fw={500}>
                  {dayjs(transaction.created_at).format("MMMM D, YYYY")}
                </Text>
                <Digits fw={700} c="blue" value={transaction.amount} />
              </Group>
            }
            variant="filled"
            onClick={() => handleTransactionClick(transaction.id)}
          />
        ))}
        <Flex justify="flex-end" px={12} gap={5}>
          <Text fw={700}>TOTAL:</Text>
          <Digits fw={700} value={data?.total ?? 0} />
        </Flex>
      </Stack>
    </AsyncState>
  );
};
