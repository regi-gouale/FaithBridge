import { MembersPageComponent } from "@/components/members/members-page-component";
import { Member } from "@/components/members/members-table-columns";

const Members: Member[] = [
  {
    id: "1",
    firstname: "John",
    lastname: "Doe",
    email: "john.doe@example.com",
    gender: "MALE",
    dateOfBirth: new Date("1990-01-01"),
    phoneNumber: "0123456789",
  },
];

function getMembers() {
  return Members;
}

export default function MembersPage() {
  const data = getMembers();

  return (
    <main className="container mx-auto px-4 py-8">
      <MembersPageComponent data={data} />
    </main>
  );
}
