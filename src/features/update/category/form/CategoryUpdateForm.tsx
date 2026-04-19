import { Stack, TextInput, Button } from "@mantine/core";
import { useForm } from "react-hook-form";
import { categoryNameRules } from "../../../validation";
import type {
  CategoryUpdateFormProps,
  CategoryUpdateFormValues,
} from "../model";

export const CategoryUpdateForm = ({
  initialName,
  onSubmit,
}: CategoryUpdateFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CategoryUpdateFormValues>({
    defaultValues: {
      name: initialName,
    },
  });

  const submit = async (data: CategoryUpdateFormValues) => {
    await onSubmit(data.name);
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
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

        <Button type="submit">Save</Button>
      </Stack>
    </form>
  );
};
