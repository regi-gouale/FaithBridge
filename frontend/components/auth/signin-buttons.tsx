"use server";

import { signIn, signOut } from "@/auth";

export async function SignInWithGithub() {
  return await signIn("github");
}

export async function SignInWithMagicLink(formData: FormData) {
  return await signIn("forwardemail", formData);
}

export async function SignInWithGoogle() {
  return await signIn("google");
}

export async function SignOutButton() {
  return await signOut({ redirectTo: "/sign-in" });
}

