"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";
import { SignInWithGithub } from "./signin-button";

interface SignInProps {
  loginText: string;
  loginDescription: string;
  email: string;
  emailPlaceholder: string;
  loginButton: string;
  loginWithButton: string;
  signUpLink: string;
  dontHaveAccount: string;
  password: string;
}

export default function SignIn({
  loginText,
  loginDescription,
  email,
  emailPlaceholder,
  loginButton,
  loginWithButton,
  signUpLink,
  dontHaveAccount,
  password,
}: SignInProps) {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center px-4">
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">{loginText}</CardTitle>
          <CardDescription className="text-justify text-xs">
            {loginDescription}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">{email}</Label>
              <Input
                id="email"
                type="email"
                placeholder={emailPlaceholder}
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">{password}</Label>
                <Link
                  href="#"
                  className="ml-auto inline-block text-sm underline"
                >
                  Forgot your password?
                </Link>
              </div>
              <Input id="password" type="password" required />
            </div>
            <Button type="submit" className="w-full">
              {loginButton}
            </Button>
            <form
              action={() => {
                SignInWithGithub();
              }}
            >
              <Button variant="outline" className="w-full">
                <FaGithub className="mr-2 size-6" />
                {loginWithButton} GitHub
              </Button>
            </form>
          </div>
          <div className="mt-4 text-center text-sm">
            {dontHaveAccount}{" "}
            <Link href="#" className="underline">
              {signUpLink}
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
