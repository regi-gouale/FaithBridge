"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { SignInWithGithub } from "./signin-button";
import Image from "next/image";
import { StrapiData } from "@/lib/strapi/fetchContentType";

export interface SignInDataProps {
  data: StrapiData;
}

export default function SignIn({ data }: SignInDataProps) {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center px-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <div className="mb-4 flex justify-center">
            <Image
              src="http://localhost:1337/uploads/logo_dbbf5809ff.svg"
              alt="Company Logo"
              width={240}
              height={50}
              priority
            />
          </div>
          <CardTitle className="text-center font-heading text-2xl">
            {data.cardTitle}
          </CardTitle>
          <CardDescription className="text-center font-body text-base">
            {data.cardDescription}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <form action={() => {}} className="space-y-4">
            <Input
              type="email"
              name="email"
              placeholder={data.emailPlaceholder as string}
              required
            />
            <Button type="submit" className="w-full">
              {data.magicLinkText}
            </Button>
          </form>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                {data.orContinueText}
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Button
              variant="outline"
              className="w-full"
              onClick={() => {
                SignInWithGithub();
              }}
            >
              <FaGithub className="mr-2 size-6" />
              GitHub
            </Button>
            <Button variant="outline" className="w-full">
              <FcGoogle className="mr-2 size-6" />
              Google
            </Button>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-sm text-muted-foreground">
            {data.dontHaveAccountText}{" "}
            <Link href="/signup" className="text-primary hover:underline">
              {data.signUpText}
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
