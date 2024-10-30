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
// import { useState } from "react";
import { fetchAPI } from "@/app/[lang]/utils/fetch-api";

// interface SignInProps {
//   id: string;
//   attributes: {
//     title: string;
//     body: string;
//     locale: string;
//     date: string;
//   };
// }

export default function SignIn() {
  // const [props, setProps] = useState<SignInProps | null>();
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
    },
  };
  const fecthData = async () => {
    const responseData = await fetchAPI("/signins?locale=fr", options);
    console.log(responseData)
  };

  fecthData();

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center px-4">
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
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
              Login
            </Button>
            <form
              action={() => {
                SignInWithGithub();
              }}
            >
              <Button variant="outline" className="w-full">
                <FaGithub className="mr-2 size-6" />
                Login with GitHub
              </Button>
            </form>
          </div>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="#" className="underline">
              Sign up
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
