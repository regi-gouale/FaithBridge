import { Member } from "@prisma/client";
import { AddMemberButton } from "./add-member-button";
import { MembersTable } from "./members-table";
import { membersTableColumns } from "./members-table-columns";

interface MembersPageComponentProps {
  data: Member[];
}

export const MembersPageComponent = ({ data }: MembersPageComponentProps) => {
  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="font-heading text-3xl font-bold">Members</h1>
        <AddMemberButton />
      </div>
      <MembersTable columns={membersTableColumns} data={data} />
    </div>
  );
};
