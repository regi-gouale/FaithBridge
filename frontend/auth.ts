import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import ForwardEmail from "next-auth/providers/forwardemail";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [GitHub, ForwardEmail],
  session: {
    strategy: "jwt",
  },
});
