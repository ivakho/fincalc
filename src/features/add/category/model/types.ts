import type { FieldErrors, UseFormRegister } from "react-hook-form";

export interface CategoryFormValues {
  name: string;
}

export interface CategoryFormProps {
  register: UseFormRegister<CategoryFormValues>;
  errors: FieldErrors<CategoryFormValues>;
}
