"use client";

import { MembersPageComponent } from "@/components/members/members-page-component";
import { useEffect, useState } from "react";

export default function MembersPage() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await fetch("/api/members");
    if (!response.ok) {
      return [];
    }
    const { members } = await response.json();
    setData(members);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className="container mx-auto px-4 py-8">
      <MembersPageComponent data={data} />
    </main>
  );
}
