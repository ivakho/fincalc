import type { Control, FieldErrors } from "react-hook-form";

export interface TransactionFormValues {
  categoryId: string;
  type: "Expense" | "Income";
  amount: number;
  date: string;
}

export interface TransactionFormProps {
  control: Control<TransactionFormValues>;
  errors: FieldErrors<TransactionFormValues>;
}
