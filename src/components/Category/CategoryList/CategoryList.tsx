import {
  Stack,
  Group,
  NavLink,
  Text,
  Card,
  Divider,
  Flex,
} from "@mantine/core";
import { useCategories } from "../../../entities";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useFilters } from "../../../hooks";
import { navigateWithSearch } from "../../../utils";
import { AsyncState, Digits } from "../../../components";
import styles from "./CategoryList.module.css";

export const CategoryList = () => {
  const { type, dateFrom, dateTo } = useFilters();
  const [searchParams] = useSearchParams();
  const { data, isLoading, isError } = useCategories(type, dateFrom, dateTo);

  const navigate = useNavigate();

  const handleCategoryClick = (categoryID: number) => {
    navigateWithSearch(
      navigate,
      `/category/${categoryID}`,
      searchParams.toString(),
    );
  };

  return (
    <AsyncState loading={isLoading} error={isError}>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Stack gap="xs">
          <Group justify="space-between">
            <Text size="sm" c="dimmed" fw={600}>
              Category
            </Text>
            <Text size="sm" c="dimmed" fw={600}>
              Amount
            </Text>
          </Group>
          <Divider />
          {data?.total === 0 && <Text c="dimmed">No data</Text>}
          {data?.categories.map((category) => (
            <NavLink
              key={category.id}
              onClick={() => handleCategoryClick(category.id)}
              variant="light"
              label={
                <Group justify="space-between">
                  <Text fw={500} lineClamp={1} className={styles.name}>
                    {category.name}
                  </Text>
                  <Digits
                    fw={700}
                    c="blue"
                    className={styles.total}
                    value={category.total}
                  />
                </Group>
              }
            />
          ))}
          <Flex justify="flex-end" px={12} gap={5}>
            <Text fw={700}>TOTAL:</Text>
            <Digits fw={700} value={data?.total ?? 0} />
          </Flex>
        </Stack>
      </Card>
    </AsyncState>
  );
};
