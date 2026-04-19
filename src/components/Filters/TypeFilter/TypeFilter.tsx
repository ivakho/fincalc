import { Tabs } from "@mantine/core";
import { useFilters } from "../../../hooks";
import styles from "./TypeFilter.module.css";

export const TypeFilter = () => {
  const { type, setType } = useFilters();

  const handleTabChange = (val: string | null) => {
    if (!val) return;
    setType(val);
  };

  return (
    <Tabs
      classNames={{
        list: styles.tabs,
      }}
      value={type}
      onChange={handleTabChange}
    >
      <Tabs.List>
        <Tabs.Tab fz="xl" value="Expense">
          Expenses
        </Tabs.Tab>
        <Tabs.Tab fz="xl" value="Income">
          Income
        </Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
};
