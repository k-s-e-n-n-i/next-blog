import { InputField } from "@/shared/ui/InputField";
import { Button, Flex } from "@radix-ui/themes";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { articleSchema, ArticleValues } from "@/shared/types/Article";
import { createArticleDB } from "../api/createArticle";

type Props = {
  userId?: string;
  onSubmit: () => void;
  onCancel: () => void;
};

export const CreateArticle = ({ userId, onSubmit, onCancel }: Props) => {
  const { handleSubmit, control, reset } = useForm<ArticleValues>({
    defaultValues: { title: "", authorId: userId },
    resolver: zodResolver(articleSchema),
  });

  const handleSave = (data: ArticleValues) => {
    createArticleDB(data);
    onSubmit();
  };

  const handleCancel = () => {
    reset();
    onCancel();
  };

  return (
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
  );
};
