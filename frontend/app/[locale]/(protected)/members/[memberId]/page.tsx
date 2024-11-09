"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { Member } from "@prisma/client";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { ArrowLeftIcon, PlusIcon, Settings } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type MemberIdPageProps = Promise<{
  memberId: string;
}>;

export default function MemberIdPage(props: { params: MemberIdPageProps }) {
  const router = useRouter();
  const [data, setData] = useState<Member>();
  const isMobile = useIsMobile();

  const fetchData = async () => {
    const { memberId } = await props.params;
    const response = await fetch(`/api/members?memberId=${memberId}`);
    if (!response.ok) {
      return [];
    }
    const { member } = await response.json();
    setData(member);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mx-auto mb-4 flex items-center justify-between">
        <Button
          variant={"ghost"}
          onClick={() => {
            router.push("/members");
          }}
        >
          <ArrowLeftIcon className="size-8" />
        </Button>
        <h1 className="font-heading text-3xl font-semibold">
          {data?.firstName} {data?.lastName}
        </h1>
        <Button
          className="flex items-center rounded-full"
          variant={"outline"}
          size={isMobile ? "icon" : "lg"}
        >
          <PlusIcon className="size-10" />
          <span
            className={cn(
              isMobile ? "hidden" : "flex",
              "ml-2 font-heading font-semibold"
            )}
          >
            Ajouter un rapport
          </span>
        </Button>
      </div>
      <Card>
        <CardHeader className="font-heading text-xl font-semibold capitalize">
          <div className="flex items-center justify-between">
            <CardTitle>Informations</CardTitle>
            <Button variant={"ghost"}>
              <Settings className="size-8 text-primary" />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="grid gap-2">
          <div className="flex items-center justify-evenly">
            <span className="font-semibold">Nom :</span>
            <span className="ml-auto">{data?.lastName}</span>
          </div>
          <div className="flex items-center justify-evenly">
            <span className="font-semibold">Prénom :</span>
            <span className="ml-auto">{data?.firstName}</span>
          </div>
          <div className="flex items-center justify-evenly">
            <span className="font-semibold">Date de naissance :</span>
            <span className="ml-auto">
              {data?.dateOfBirth
                ? format(data.dateOfBirth, "PPP", { locale: fr })
                : "N/A"}
            </span>
          </div>
          <div className="flex items-center justify-evenly">
            <span className="font-semibold">E-Mail :</span>
            <span className="ml-auto">{data?.email}</span>
          </div>
          <div className="flex items-center justify-evenly">
            <span className="font-semibold">Téléphone :</span>
            <span className="ml-auto">{data?.phone}</span>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
