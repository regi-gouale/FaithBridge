import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  if (!process.env.DATABASE_URL) {
    return NextResponse.json(
      { error: "DATABASE_URL is not set" },
      { status: 500 }
    );
  }
  try {
    const members = await prisma.member.findMany();
    return NextResponse.json({ members }, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: `Failed to fetch members.` },
      { status: 500 }
    );
  }
}
