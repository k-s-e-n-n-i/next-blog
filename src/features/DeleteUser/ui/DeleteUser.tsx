import { Button } from "@radix-ui/themes";

import { TriggerWithModal } from "@/shared/ui/TriggerWithModal";
import { TrashIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { deleteUserDB } from "../api/deleteUser";

type Props = {
  id: number;
  title: string;
};

export const DeleteUser = ({ id, title }: Props) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const router = useRouter();

  const closeModal = () => setIsOpenModal(false);

  const handleDelete = () => {
    deleteUserDB(id);

    router.refresh();
    closeModal();
  };

  return (
    <TriggerWithModal
      title={`Вы действительно хотите удалить пользователя ${title}?`}
      open={isOpenModal}
      onOpenChange={setIsOpenModal}
      onOk={handleDelete}
      footer
      okText="Да"
    >
      <Button>
        <TrashIcon />
      </Button>
    </TriggerWithModal>
  );
};
