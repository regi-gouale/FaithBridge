"use client";

import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import { enGB, fr } from "date-fns/locale";
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
import { usePathname } from "next/navigation";
import { useToast } from "@/hooks/use-toast";

export type InterviewReport = {
  id: number;
  memberName: string;
  interviewerName: string;
  date: Date;
  reason: string;
  privacy: string;
  report: string;
};

const InterviewDateCell = ({ date }: { date: Date }) => {
  const locale = usePathname().startsWith("/fr") ? fr : enGB;

  return (
    <div className="ml-4 text-left font-body font-medium">
      {format(date, "PPP", {
        locale: locale,
      })}
    </div>
  );
};

import { Row } from "@tanstack/react-table";

const ActionsCell = ({ row }: { row: Row<InterviewReport> }) => {
  const interview = row.original;
  const { toast } = useToast();

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
          onClick={() => {
            navigator.clipboard.writeText(interview.id.toString());
            toast({
              title: "Copied ID",
              description: `ID ${interview.id} copied to clipboard`,
            });
          }}
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
};

export const interviewColumns: ColumnDef<InterviewReport>[] = [
  {
    accessorKey: "memberName",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() == "asc")}
          className="font-heading font-semibold"
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
          className="font-heading font-semibold"
        >
          Interview Date
          <ArrowUpDownIcon className="ml-2 size-4" />
        </Button>
      );
    },
    cell: (row) => <InterviewDateCell date={row.getValue() as Date} />,
  },
  {
    header: () => <div className="font-heading font-semibold">Reason</div>,
    accessorKey: "reason",
  },
  {
    header: () => <div className="font-heading font-semibold">Privacy</div>,
    accessorKey: "privacy",
  },
  {
    header: () => <div className="font-heading font-semibold">Reason</div>,
    accessorKey: "interviewerName",
  },
  {
    id: "actions",
    cell: ({ row }) => <ActionsCell row={row} />,
  },
];
