import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import ForwardEmail from "next-auth/providers/forwardemail";
import Google from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GitHub,
    ForwardEmail({
      apiKey: process.env.AUTH_FORWARDEMAIL_KEY,
      from: process.env.EMAIL_FROM,
    }),
    Google
  ],
  session: {
    strategy: "jwt",
  },
});
