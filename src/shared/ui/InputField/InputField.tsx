import { Box, TextField, Text } from "@radix-ui/themes";
import {
  Controller,
  ControllerProps,
  FieldPath,
  FieldValues,
} from "react-hook-form";

type Props<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = Omit<ControllerProps<TFieldValues, TName>, "render"> & {
  label?: string;
  type?: "text" | "password";
};

export const InputField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  label,
  type = "text",
  ...props
}: Props<TFieldValues, TName>) => {
  return (
    <Box>
      {label ? (
        <Text as="div" mt="16px" mb="8px" weight="bold">
          {label}
        </Text>
      ) : null}
      <Controller
        {...props}
        render={({ field, fieldState }) => (
          <>
            <TextField.Root {...field} type={type} />
            <Text color="red">{fieldState.error?.message}</Text>
          </>
        )}
      />
    </Box>
  );
};
