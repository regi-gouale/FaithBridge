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
import { SignInWithGithub, SignInWithGoogle, SignInWithMagicLink } from "./signin-buttons";
import Image from "next/image";
import { StrapiData } from "@/lib/strapi/fetchContentType";

export interface SignInDataProps {
  data: StrapiData;
}

export default function SignIn({ data }: SignInDataProps) {
  return (
    <div className="flex w-full flex-col items-center justify-center px-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <div className="mb-4 flex justify-center">
            <Image
              src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/uploads/logo_dbbf5809ff.svg`}
              alt="Company Logo"
              width={240}
              height={240}
              priority
            />
          </div>
          <CardTitle className="text-center font-heading text-2xl">
            {data.cardTitle as string}
          </CardTitle>
          <CardDescription className="text-center font-body text-base">
            {data.cardDescription as string}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <form
            action={(formData) => {
              SignInWithMagicLink(formData);
            }}
            className="space-y-4"
          >
            <Input
              type="email"
              name="email"
              placeholder={data.emailPlaceholder as string}
              className="h-10"
              required
            />
            <Button
              type="submit"
              className="w-full font-heading font-semibold"
              size="lg"
            >
              {data.magicLinkText as string}
            </Button>
          </form>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                {data.orContinueText as string}
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Button
              variant="outline"
              className="w-full font-heading font-medium"
              size={"lg"}
              onClick={() => {
                SignInWithGithub();
              }}
            >
              <FaGithub className="mr-2 size-6" />
              GitHub
            </Button>
            <Button
              variant="outline"
              className="w-full font-heading font-medium"
              size={"lg"}
              onClick={() => {
                SignInWithGoogle();
              }}
            >
              <FcGoogle className="mr-2 size-6" />
              Google
            </Button>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-sm text-muted-foreground">
            {data.dontHaveAccountText as string}{" "}
            <Link href="/sign-up" className="text-primary hover:underline">
              {data.signUpText as string}
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
