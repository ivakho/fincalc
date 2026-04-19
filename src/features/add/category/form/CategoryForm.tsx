import { Stack, TextInput } from "@mantine/core";
import type { CategoryFormProps } from "../model";
import { categoryNameRules } from "../../../validation";

export const CategoryForm = ({ register, errors }: CategoryFormProps) => {
  return (
    <Stack>
      <TextInput
        label="Name"
        {...register("name", {
          required: "Name is required",
          minLength: {
            value: categoryNameRules.minLength,
            message: categoryNameRules.minLengthMsg,
          },
          maxLength: {
            value: categoryNameRules.maxLength,
            message: categoryNameRules.maxLengthMsg,
          },
        })}
        error={errors.name?.message}
      />
    </Stack>
  );
};
