import { InputField } from "@/shared/ui/InputField";
import { Button, Flex } from "@radix-ui/themes";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { TriggerWithModal } from "@/shared/ui/TriggerWithModal";
import { Pencil1Icon } from "@radix-ui/react-icons";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { userSchema, UserValues } from "@/entities/user";
import { editUserDB } from "../api/editUser";
import { SelectField } from "@/shared/ui/SelectField";

type Props = {
  defaultValues: UserValues;
};

export const EditUser = ({ defaultValues }: Props) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const router = useRouter();

  const closeModal = () => setIsOpenModal(false);

  const { handleSubmit, control, reset } = useForm<UserValues>({
    defaultValues: defaultValues,
    resolver: zodResolver(userSchema),
  });

  const handleSave = (data: UserValues) => {
    editUserDB(data);

    router.refresh();
    closeModal();
  };

  const handleCancel = () => {
    reset();
    closeModal();
  };

  return (
    <TriggerWithModal
      title="Редактировать статью"
      open={isOpenModal}
      onOpenChange={setIsOpenModal}
      content={
        <Flex direction="column">
          <form onSubmit={handleSubmit(handleSave)}>
            <InputField label="Имя" name="name" control={control} />
            <InputField label="Почта" name="email" control={control} />
            <InputField label="Роль" name="role" control={control} />
            <SelectField
              label="Роль"
              name="role"
              control={control}
              options={[
                { id: "admin", name: "admin" },
                { id: "moderator", name: "moderator" },
              ]}
            />

            <Flex gap="3" mt="5" justify="end">
              <Button type="button" variant="soft" color="gray" onClick={handleCancel}>
                Отмена
              </Button>
              <Button type="submit">Сохранить</Button>
            </Flex>
          </form>
        </Flex>
      }
    >
      <Button>
        <Pencil1Icon />
      </Button>
    </TriggerWithModal>
  );
};
