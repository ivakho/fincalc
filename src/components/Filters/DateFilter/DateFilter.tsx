import { useEffect, useMemo, useState } from "react";
import { Popover, Tabs } from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import type { Period } from "./types";
import { getPeriodRange, toStringRange } from "./utils";
import { useFilters } from "../../../hooks";
import styles from "./DateFilter.module.css";

export const DateFilter = () => {
  const [period, setPeriod] = useState<Period>("day");
  const [opened, setOpened] = useState(false);
  const { setDates } = useFilters();

  const [range, setRange] = useState<[string | null, string | null]>(() => {
    const [from, to] = getPeriodRange("day");
    return toStringRange([from, to]);
  });

  const handleChangePeriod = (value: string | null) => {
    if (!value) return;

    const nextPeriod = value as Period;
    setPeriod(nextPeriod);

    if (nextPeriod === "custom") {
      setOpened(true);
      return;
    }

    setOpened(false);

    const [from, to] = getPeriodRange(nextPeriod);

    setRange(toStringRange([from, to]));
  };

  const handleDateChange = (value: [string | null, string | null]) => {
    setRange(value);
    setPeriod("custom");

    const [from, to] = value;
    if (from && to) {
      setOpened(false);
    }
  };

  const queryParams = useMemo(() => {
    const [from, to] = range;
    if (!from || !to) return "";

    return `date_from=${from}&date_to=${to}`;
  }, [range]);

  useEffect(() => {
    if (!queryParams) return;

    const [from, to] = range;
    if (!from || !to) return;

    setDates(from, to);
  }, [queryParams]);

  return (
    <Popover
      opened={opened}
      onChange={setOpened}
      position="bottom-start"
      withArrow
      shadow="md"
    >
      <Popover.Target>
        <Tabs
          value={period}
          classNames={{
            list: styles.tabs,
          }}
          onChange={handleChangePeriod}
        >
          <Tabs.List>
            <Tabs.Tab value="day">Day</Tabs.Tab>
            <Tabs.Tab value="week">Week</Tabs.Tab>
            <Tabs.Tab value="month">Month</Tabs.Tab>
            <Tabs.Tab value="year">Year</Tabs.Tab>
            <Tabs.Tab value="custom">Custom</Tabs.Tab>
          </Tabs.List>
        </Tabs>
      </Popover.Target>
      <Popover.Dropdown>
        <DatePicker type="range" value={range} onChange={handleDateChange} />
      </Popover.Dropdown>
    </Popover>
  );
};
