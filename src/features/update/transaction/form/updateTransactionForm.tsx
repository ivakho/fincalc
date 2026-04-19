import { Stack, NumberInput, Button } from "@mantine/core";
import { Controller, useForm } from "react-hook-form";
import type { UpdateTransactionFormValues } from "../model";

export const UpdateTransactionForm = ({
  initialAmount,
  onSubmit,
}: {
  initialAmount: number;
  onSubmit: (amount: number) => Promise<void>;
}) => {
  const { control, handleSubmit } = useForm<UpdateTransactionFormValues>({
    defaultValues: {
      amount: initialAmount,
    },
  });

  const submit = async (data: UpdateTransactionFormValues) => {
    await onSubmit(data.amount);
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <Stack>
        <Controller
          name="amount"
          control={control}
          rules={{
            required: "Amount is required",
            validate: (value) => value !== 0 || "Amount cannot be 0",
          }}
          render={({ field, fieldState }) => (
            <NumberInput
              label="Amount"
              value={field.value}
              onChange={(value) =>
                field.onChange(typeof value === "number" ? value : 0)
              }
              error={fieldState.error?.message}
            />
          )}
        />
        <Button type="submit">Save</Button>
      </Stack>
    </form>
  );
};
