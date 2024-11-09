"use client";

import { DataTable } from "@/components/interviews/data-table";
import { interviewColumns, InterviewReport } from "./columns";
import { NewInterviewButton } from "./new-interview-button";

interface InterviewsComponentProps {
  data: InterviewReport[];
}

export const InterviewsComponent = ({ data }: InterviewsComponentProps) => {
  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="font-heading text-3xl font-bold">Interviews</h1>
        <NewInterviewButton />
      </div>
      <DataTable columns={interviewColumns} data={data} />
    </div>
  );
};
