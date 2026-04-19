import { Stack, Select, NumberInput } from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import { useCategoriesSelect } from "../../../../entities";
import { Controller } from "react-hook-form";
import type { TransactionFormProps } from "../model";

export const TransactionForm = ({ control, errors }: TransactionFormProps) => {
  const { data: categories } = useCategoriesSelect();

  return (
    <Stack>
      <Controller
        control={control}
        name="categoryId"
        rules={{ required: "Category is required" }}
        render={({ field }) => (
          <Select
            label="Category"
            data={categories ?? []}
            value={field.value}
            onChange={field.onChange}
            error={errors.categoryId?.message}
            searchable
          />
        )}
      />
      <Controller
        control={control}
        name="type"
        render={({ field }) => (
          <Select
            label="Type"
            data={[
              { value: "Expense", label: "Expense" },
              { value: "Income", label: "Income" },
            ]}
            value={field.value}
            onChange={(value) => field.onChange(value)}
          />
        )}
      />
      <Controller
        control={control}
        name="amount"
        rules={{
          required: "Amount is required",
          validate: (value) => value > 0 || "Amount must be greater than 0",
        }}
        render={({ field }) => (
          <NumberInput
            label="Amount"
            min={0}
            value={field.value}
            onChange={(value) =>
              field.onChange(typeof value === "number" ? value : 0)
            }
            error={errors.amount?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="date"
        rules={{ required: "Date is required" }}
        render={({ field }) => (
          <DatePickerInput
            label="Created at"
            value={field.value}
            onChange={field.onChange}
            error={errors.date?.message}
          />
        )}
      />
    </Stack>
  );
};
