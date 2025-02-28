import { InputField } from "@/shared/ui/InputField";
import { Button, Flex } from "@radix-ui/themes";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Article, articleSchema, ArticleValues } from "@/shared/types/Article";
import { TriggerWithModal } from "@/shared/ui/TriggerWithModal";
import { Pencil1Icon } from "@radix-ui/react-icons";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { editArticleDB } from "../api/editArticle";

type Props = {
  defaultValues: Article;
};

export const EditArticle = ({ defaultValues }: Props) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const router = useRouter();

  const closeModal = () => setIsOpenModal(false);

  const { handleSubmit, control, reset } = useForm<ArticleValues>({
    defaultValues: defaultValues,
    resolver: zodResolver(articleSchema),
  });

  const handleSave = (data: ArticleValues) => {
    editArticleDB(data);

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
            <InputField label="Заголовок" name="title" control={control} />
            <InputField label="Текст статьи" name="description" control={control} />

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
