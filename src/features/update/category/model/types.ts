export type CategoryUpdateFormValues = {
  name: string;
};

export type CategoryUpdateFormProps = {
  initialName: string;
  onSubmit: (name: string) => Promise<void>;
};
