import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import ForwardEmail from "next-auth/providers/forwardemail";
import Google from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Google({
      profile(profile) {
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture as string | null | undefined,
          emailVerified: profile.email_verified,
        };
      },
    }),
    GitHub({
      profile(profile) {
        return {
          id: profile.id.toString(),
          name: profile.name,
          email: profile.email,
          image: profile.picture as string | null | undefined,
          emailVerified: profile.email_verified,
        };
      },
    }),
    ForwardEmail({
      apiKey: process.env.AUTH_FORWARDEMAIL_KEY,
      from: process.env.EMAIL_FROM,
    }),
  ],
  session: {
    strategy: "database",
  },
  callbacks: {
    async session({ session, user }) {
      if (!session?.user) return session;
      session.user.id = user.id;
      if ("role" in user) session.user.role = user.role;
      return session;
    },
  },
});
