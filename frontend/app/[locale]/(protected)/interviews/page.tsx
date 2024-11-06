import {
  interviewColumns,
  InterviewReport,
} from "@/components/interviews/columns";
import { DataTable } from "@/components/interviews/data-table";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";

// Mock data for interview reports
const interviewReports: InterviewReport[] = [
  {
    id: 1,
    memberName: "John Doe",
    interviewerName: "Jane Smith",
    date: new Date("2023-05-15"),
    reason: "Annual Review",
    privacy: "Confidential",
    report: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed...",
  },
  {
    id: 2,
    memberName: "Jane Smith",
    interviewerName: "John Doe",
    date: new Date("2023-05-10"),
    reason: "New Member",
    privacy: "Public",
    report: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed...",
  },
  {
    id: 3,
    memberName: "Mike Johnson",
    interviewerName: "Sarah Williams",
    date: new Date("2023-05-05"),
    reason: "Pastoral Care",
    privacy: "Private",
    report: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed...",
  },
  {
    id: 4,
    memberName: "Sarah Williams",
    interviewerName: "Mike Johnson",
    date: new Date("2023-04-30"),
    reason: "Volunteer Check-in",
    privacy: "Public",
    report: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed...",
  },
  {
    id: 5,
    memberName: "David Brown",
    interviewerName: "Emily Davis",
    date: new Date("2023-04-25"),
    reason: "Spiritual Guidance",
    privacy: "Confidential",
    report: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed...",
  },
  {
    id: 6,
    memberName: "Emily Davis",
    interviewerName: "David Brown",
    date: new Date("2023-04-20"),
    reason: "Counseling",
    privacy: "Private",
    report: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed...",
  },
  {
    id: 7,
    memberName: "Chris Wilson",
    interviewerName: "Amanda Moore",
    date: new Date("2023-04-15"),
    reason: "Mentoring",
    privacy: "Public",
    report: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed...",
  },
  {
    id: 8,
    memberName: "Amanda Moore",
    interviewerName: "Chris Wilson",
    date: new Date("2023-04-10"),
    reason: "Leadership Development",
    privacy: "Private",
    report: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed...",
  },
  {
    id: 9,
    memberName: "James Taylor",
    interviewerName: "Olivia Anderson",
    date: new Date("2023-04-05"),
    reason: "Training",
    privacy: "Public",
    report: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed...",
  },
  {
    id: 10,
    memberName: "Olivia Anderson",
    interviewerName: "James Taylor",
    date: new Date("2023-04-01"),
    reason: "Coaching",
    privacy: "Confidential",
    report: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed...",
  },
  {
    id: 11,
    memberName: "Daniel Thomas",
    interviewerName: "Sophia Jackson",
    date: new Date("2023-03-30"),
    reason: "Discipleship",
    privacy: "Private",
    report: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed...",
  },
  {
    id: 12,
    memberName: "Sophia Jackson",
    interviewerName: "Daniel Thomas",
    date: new Date("2023-03-25"),
    reason: "Counseling",
    privacy: "Public",
    report: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed...",
  },
  {
    id: 13,
    memberName: "Joseph White",
    interviewerName: "Charlotte Harris",
    date: new Date("2023-03-20"),
    reason: "Mentoring",
    privacy: "Confidential",
    report: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed...",
  },
  {
    id: 14,
    memberName: "Charlotte Harris",
    interviewerName: "Joseph White",
    date: new Date("2023-03-15"),
    reason: "Leadership Development",
    privacy: "Private",
    report: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed...",
  },
  {
    id: 15,
    memberName: "Benjamin Martin",
    interviewerName: "Natalie Thompson",
    date: new Date("2023-03-10"),
    reason: "Training",
    privacy: "Public",
    report: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed...",
  },
  {
    id: 16,
    memberName: "Natalie Thompson",
    interviewerName: "Benjamin Martin",
    date: new Date("2023-03-05"),
    reason: "Coaching",
    privacy: "Private",
    report: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed...",
  },
  {
    id: 17,
    memberName: "Robert Garcia",
    interviewerName: "Lily Martinez",
    date: new Date("2023-03-01"),
    reason: "Discipleship",
    privacy: "Public",
    report: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed...",
  },
  {
    id: 18,
    memberName: "Lily Martinez",
    interviewerName: "Robert Garcia",
    date: new Date("2023-02-25"),
    reason: "Counseling",
    privacy: "Confidential",
    report: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed...",
  },
  {
    id: 19,
    memberName: "William Robinson",
    interviewerName: "Grace Clark",
    date: new Date("2023-02-20"),
    reason: "Mentoring",
    privacy: "Private",
    report: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed...",
  },
  {
    id: 20,
    memberName: "Grace Clark",
    interviewerName: "William Robinson",
    date: new Date("2023-02-15"),
    reason: "Leadership Development",
    privacy: "Public",
    report: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed...",
  },
];

async function getInterviewReports(): Promise<InterviewReport[]> {
  return interviewReports;
}

export default async function InterviewsPage() {
  const data = await getInterviewReports();

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="font-heading text-3xl font-bold">Interviews</h1>
        <Button className="flex rounded-full font-heading font-semibold">
          <PlusIcon className="size-8" />
          <span className="ml-2 hidden md:flex">New Interview Report</span>
        </Button>
      </div>
      <DataTable columns={interviewColumns} data={data} />
    </main>
  );
}
