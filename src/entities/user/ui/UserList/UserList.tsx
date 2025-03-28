"use client";

import { Table } from "@radix-ui/themes";
import { User } from "@/entities/user";
import { DeleteUser } from "@/features/DeleteUser/ui/DeleteUser";
import { EditUser } from "@/features/EditUser";

type Props = {
  list: User[];
};

export const UserList = ({ list }: Props) => {
  return (
    <Table.Root>
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell width="64px">id</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Имя</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Почта</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Роль</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell width="64px"></Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell width="64px"></Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {list.map(({ id, name, email, role }) => (
          <Table.Row key={id}>
            <Table.RowHeaderCell>{id}</Table.RowHeaderCell>
            <Table.Cell>{name}</Table.Cell>
            <Table.Cell>{email}</Table.Cell>
            <Table.Cell>{role}</Table.Cell>
            <Table.Cell>
              <EditUser defaultValues={{ id, name, email, role }} />
            </Table.Cell>
            <Table.Cell>{id && <DeleteUser id={id} title={name || ""} />}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
};
