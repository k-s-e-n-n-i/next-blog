"use client";

import { Box, Button, Table } from "@radix-ui/themes";
import { Article } from "@/shared/types/Article";
import { TriggerWithModal } from "@/shared/ui/TriggerWithModal";
import { PlusIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { CreateArticle } from "@/features/CreateArticle";
import { useRouter } from "next/navigation";
import { EditArticle } from "@/features/EditArticle";
import { DeleteArticle } from "@/features/DeleteArticle";

type Props = {
  articles: Article[];
  userId?: string;
};

export const AdminContent = ({ articles, userId }: Props) => {
  const [isOpenCreateModal, setIsOpenCreateModal] = useState(false);

  const router = useRouter();

  const closeCreateModal = () => setIsOpenCreateModal(false);

  const onSubmitCreate = () => {
    router.refresh();
    closeCreateModal();
  };

  return (
    <Box>
      <TriggerWithModal
        title="Создать статью"
        open={isOpenCreateModal}
        onOpenChange={setIsOpenCreateModal}
        content={<CreateArticle userId={userId} onSubmit={onSubmitCreate} onCancel={closeCreateModal} />}
      >
        <Button>
          <PlusIcon /> Добавить статью
        </Button>
      </TriggerWithModal>

      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Заголовок</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Постер</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell width="64px"></Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell width="64px"></Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {articles.map((item, i) => (
            <Table.Row key={i}>
              <Table.RowHeaderCell>{item.title}</Table.RowHeaderCell>
              <Table.Cell>{item.image ? <img src={item.image} /> : <span />}</Table.Cell>
              <Table.Cell>
                <EditArticle defaultValues={{ ...item, authorId: userId }} />
              </Table.Cell>
              <Table.Cell>{item.id && <DeleteArticle id={item.id} title={item.title} />}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Box>
  );
};
