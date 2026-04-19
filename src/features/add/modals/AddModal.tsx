import { Tabs, Stack, Button } from "@mantine/core";
import { useState } from "react";
import dayjs from "dayjs";
import { modals } from "@mantine/modals";
import {
  CategoryForm,
  TransactionForm,
  type TransactionFormValues,
  type CategoryFormValues,
} from "../../../features";
import { useCreateTransaction, useCreateCategory } from "../../../entities";
import { useForm } from "react-hook-form";

export const AddModal = () => {
  const [tab, setTab] = useState("transaction");

  const createTransaction = useCreateTransaction();
  const createCategory = useCreateCategory();

  const {
    control,
    handleSubmit: handleTransactionSubmit,
    formState: { errors: transactionErrors },
  } = useForm<TransactionFormValues>({
    defaultValues: {
      categoryId: "",
      type: "Expense",
      amount: 0,
      date: dayjs().format("YYYY-MM-DD"),
    },
  });

  const {
    register,
    handleSubmit: handleCategorySubmit,
    setError,
    formState: { errors: categoryErrors },
  } = useForm({
    defaultValues: {
      name: "",
    },
  });

  const onSubmitTransaction = (data: TransactionFormValues) => {
    createTransaction.mutate(
      {
        category_id: Number(data.categoryId),
        type: data.type,
        amount: data.amount,
        created_at: data.date,
      },
      {
        onSuccess: () => {
          modals.closeAll();
        },
      },
    );
  };

  const onSubmitCategory = (data: CategoryFormValues) => {
    createCategory.mutate(data.name, {
      onSuccess: () => {
        modals.closeAll();
      },
      onError: (error: Error) => {
        setError("name", { message: error.message });
      },
    });
  };

  return (
    <>
      <Tabs value={tab} onChange={(value) => setTab(value || "transaction")}>
        <Tabs.List>
          <Tabs.Tab value="transaction">Transaction</Tabs.Tab>
          <Tabs.Tab value="category">Category</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="transaction" pt="md">
          <form onSubmit={handleTransactionSubmit(onSubmitTransaction)}>
            <TransactionForm control={control} errors={transactionErrors} />
            <Stack mt="md">
              <Button type="submit">Submit</Button>
              <Button variant="subtle" onClick={() => modals.closeAll()}>
                Cancel
              </Button>
            </Stack>
          </form>
        </Tabs.Panel>
        <Tabs.Panel value="category" pt="md">
          <form onSubmit={handleCategorySubmit(onSubmitCategory)}>
            <CategoryForm register={register} errors={categoryErrors} />
            <Stack mt="md">
              <Button type="submit">Submit</Button>
              <Button variant="subtle" onClick={() => modals.closeAll()}>
                Cancel
              </Button>
            </Stack>
          </form>
        </Tabs.Panel>
      </Tabs>
    </>
  );
};
