import { Controller, ControllerProps, FieldPath, FieldValues } from "react-hook-form";

import { Box, Select, Text } from "@radix-ui/themes";

type Props<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = Omit<ControllerProps<TFieldValues, TName>, "render"> & {
  label?: string;
  options: { id: string; name: string }[];
  placeholder?: string;
};

export const SelectField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  label,
  name,
  control,
  defaultValue,
  options,
  rules,
  disabled,
  placeholder,
}: Props<TFieldValues, TName>) => {
  return (
    <Box>
      {label ? (
        <Text as="div" weight="bold" mt="16px" mb="8px">
          {label}
        </Text>
      ) : null}
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        rules={rules}
        disabled={disabled}
        render={({ field, fieldState }) => (
          <>
            <Select.Root {...field} onValueChange={field.onChange}>
              <Select.Trigger placeholder={placeholder} style={{ minWidth: "150px" }} />
              <Select.Content>
                <Select.Group>
                  {options.map(({ id, name }) => (
                    <Select.Item value={id} key={id}>
                      {name}
                    </Select.Item>
                  ))}
                </Select.Group>
              </Select.Content>
            </Select.Root>
            <Text as="div" color="red">
              {fieldState.error?.message}
            </Text>
          </>
        )}
      />
    </Box>
  );
};
