import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import ForwardEmail from "next-auth/providers/forwardemail";
import Google from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma";
import { UserRole } from "@prisma/client";

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
          role: profile.role ?? UserRole.MEMBER,
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
          role: profile.role ?? UserRole.MEMBER,
        };
      },
    }),
    ForwardEmail({
      apiKey: process.env.AUTH_FORWARDEMAIL_KEY,
      from: process.env.EMAIL_FROM,
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    jwt({ token, user }) {
      if (user) token.role = user.role;
      return token;
    },
    session({ session, token }) {
      session.user.role = token.role;
      return session;
    },
  },
});
