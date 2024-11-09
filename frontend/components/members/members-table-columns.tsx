"use client";

import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { formatDistanceToNowStrict } from "date-fns";
import { fr } from "date-fns/locale";
import { ArrowUpDownIcon } from "lucide-react";

export type Member = {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  gender: "MALE" | "FEMALE";
  dateOfBirth: Date;
  phoneNumber: string;
};

export const membersTableColumns: ColumnDef<Member>[] = [
  {
    accessorKey: "firstname",
    header: ({ column }) => {
      return (
        <Button
          variant={"ghost"}
          onClick={() => column.toggleSorting(column.getIsSorted() == "asc")}
          className="font-heading font-semibold"
        >
          First Name
          <ArrowUpDownIcon className="ml-2 size-4" />
        </Button>
      );
    },
    cell: (row) => (
      <div className="ml-4 text-left font-body">{row.getValue() as string}</div>
    ),
  },
  {
    accessorKey: "lastname",
    header: ({ column }) => {
      return (
        <Button
          variant={"ghost"}
          onClick={() => column.toggleSorting(column.getIsSorted() == "asc")}
          className="font-heading font-semibold"
        >
          Last Name
          <ArrowUpDownIcon className="ml-2 size-4" />
        </Button>
      );
    },
    cell: (row) => (
      <div className="ml-4 text-left font-body">{row.getValue() as string}</div>
    ),
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant={"ghost"}
          onClick={() => column.toggleSorting(column.getIsSorted() == "asc")}
          className="font-heading font-semibold"
        >
          Email
        </Button>
      );
    },
    cell: (row) => (
      <div className="ml-4 text-left font-body">{row.getValue() as string}</div>
    ),
  },
  {
    id: "age",
    header: () => (
      <div className="mr-4 text-right font-heading font-semibold">Age</div>
    ),
    cell: ({ row }) => {
      const member = row.original;
      const age = formatDistanceToNowStrict(member.dateOfBirth, {
        locale: fr,
      });
      // const age = 20;

      return <div className="mr-4 text-right font-body">{age} </div>;
    },
  },
];
