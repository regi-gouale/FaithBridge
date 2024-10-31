"use server";

import { signIn } from "@/auth";

export async function SignInWithGithub() {
  return await signIn("github");
}
export async function SignInWithMagicLink() {
  return await signIn();
}
