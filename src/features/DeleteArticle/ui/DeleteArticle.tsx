import { Button } from "@radix-ui/themes";

import { TriggerWithModal } from "@/shared/ui/TriggerWithModal";
import { TrashIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { deleteArticleDB } from "../api/deleteArticle";

type Props = {
  id: number;
  title: string;
};

export const DeleteArticle = ({ id, title }: Props) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const router = useRouter();

  const closeModal = () => setIsOpenModal(false);

  const handleDelete = () => {
    deleteArticleDB(id);

    router.refresh();
    closeModal();
  };

  return (
    <TriggerWithModal
      title={`Вы действительно хотите удалить статью ${title}?`}
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
