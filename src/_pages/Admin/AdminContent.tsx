"use client";

import { Button, Heading, Table } from "@radix-ui/themes";
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
};

export const AdminContent = ({ articles }: Props) => {
  const [isOpenCreateModal, setIsOpenCreateModal] = useState(false);

  const router = useRouter();

  const closeCreateModal = () => setIsOpenCreateModal(false);

  const onSubmitCreate = () => {
    router.refresh();
    closeCreateModal();
  };

  return (
    <div>
      <Heading as="h1" mt="3" mb="3" size="8">
        Admin
      </Heading>

      <TriggerWithModal
        title="Создать статью"
        open={isOpenCreateModal}
        onOpenChange={setIsOpenCreateModal}
        content={<CreateArticle onSubmit={onSubmitCreate} onCancel={closeCreateModal} />}
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
                <EditArticle defaultValues={item} />
              </Table.Cell>
              <Table.Cell>{item.id && <DeleteArticle id={item.id} title={item.title} />}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  );
};
