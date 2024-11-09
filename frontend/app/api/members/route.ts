import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  if (!process.env.DATABASE_URL) {
    return NextResponse.json(
      { error: "DATABASE_URL is not set" },
      { status: 500 }
    );
  }
  const memberId = req.nextUrl.searchParams.get("memberId");
  // Check if the request is for a specific member
  // console.log(memberId);
  if (memberId) {
    try {
      const member = await prisma.member.findUnique({
        where: { id: memberId },
      });
      if (!member) {
        return NextResponse.json(
          { error: `Member with id ${memberId} not found.` },
          { status: 404 }
        );
      }
      return NextResponse.json({ member }, { status: 200 });
    } catch {
      return NextResponse.json(
        { error: `Failed to fetch member with id ${memberId}.` },
        { status: 500 }
      );
    }
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
