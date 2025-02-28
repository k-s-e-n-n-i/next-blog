import { ReactNode } from "react";

import { Button, Dialog, Flex } from "@radix-ui/themes";

type Props = {
  children: ReactNode;
  content?: ReactNode;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  okText?: string;
  onOk?: () => void;
  footer?: boolean;
};

export const TriggerWithModal = ({
  children,
  content,
  title,
  okText = "Сохранить",
  open,
  onOpenChange,
  onOk,
  footer = false,
}: Props) => {
  const handleCancel = () => {
    onOpenChange(false);
  };

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Trigger>{children}</Dialog.Trigger>

      <Dialog.Content maxWidth="450px" onEscapeKeyDown={handleCancel} onInteractOutside={handleCancel}>
        <Dialog.Title mb="2">{title}</Dialog.Title>

        <Flex direction="column" gap="3">
          {content}
        </Flex>

        {footer && (
          <Flex gap="3" mt="5" justify="end">
            <Dialog.Close>
              <Button variant="soft" color="gray" onClick={handleCancel}>
                Отмена
              </Button>
            </Dialog.Close>
            <Button onClick={onOk}>{okText}</Button>
          </Flex>
        )}
      </Dialog.Content>
    </Dialog.Root>
  );
};
