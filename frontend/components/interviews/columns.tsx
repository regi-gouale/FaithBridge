"use client";

import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import {
  ArrowUpDownIcon,
  CopyIcon,
  EyeIcon,
  MoreHorizontal,
  PlusIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export type InterviewReport = {
  id: number;
  memberName: string;
  interviewerName: string;
  date: Date;
  reason: string;
  privacy: string;
  report: string;
};

export const interviewColumns: ColumnDef<InterviewReport>[] = [
  {
    accessorKey: "memberName",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() == "asc")}
        >
          Member
          <ArrowUpDownIcon className="ml-2 size-4" />
        </Button>
      );
    },
    cell: (row) => (
      <div className="ml-4 text-left font-body font-semibold">
        {row.getValue() as string}
      </div>
    ),
  },
  {
    accessorKey: "date",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() == "asc")}
        >
          Interview Date
          <ArrowUpDownIcon className="ml-2 size-4" />
        </Button>
      );
    },
    cell: (row) => (
      <div className="ml-4 text-left font-body font-medium">
        {format(row.getValue() as Date, "PPP")}
      </div>
    ),
  },
  {
    header: "Reason",
    accessorKey: "reason",
  },
  {
    header: "Privacy",
    accessorKey: "privacy",
  },
  {
    header: "Interviewer",
    accessorKey: "interviewerName",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const interview = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild className="text-right font-body">
            <Button variant="ghost" className="size-8 p-0">
              <span className="sr-only">Open Menu</span>
              <MoreHorizontal className="size-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() =>
                navigator.clipboard.writeText(interview.id.toString())
              }
            >
              <CopyIcon className="mr-1 size-3" />
              Copy ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <PlusIcon className="mr-1 size-3" />
              Add new report
            </DropdownMenuItem>
            <DropdownMenuItem>
              <EyeIcon className="mr-1 size-3" />
              View reports details
            </DropdownMenuItem>
            <DropdownMenuItem>
              <EyeIcon className="mr-1 size-3" />
              View Member
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
