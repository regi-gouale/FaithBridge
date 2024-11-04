import React from "react";
import { Button } from "@/components/ui/button";
import fetchContentType, { StrapiData } from "@/lib/strapi/fetchContentType";
import Link from "next/link";

interface HeroSectionProps {
  locale: string;
}

export const HeroSection = async ({ locale }: HeroSectionProps) => {
  const heroSectionContent = (await fetchContentType(
    "hero-sections",
    `locale=${locale}`
  )) as StrapiData;

  return (
    <section className="w-full py-16 md:py-32 lg:py-48 xl:py-64">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="mb-4 font-heading text-3xl font-bold tracking-tighter sm:mb-6 sm:text-4xl md:mb-8 md:text-5xl lg:mb-12 lg:text-6xl/none">
              {heroSectionContent.mainText as string}
            </h1>
            <p className="mx-auto mb-4 max-w-3xl font-body text-gray-500 dark:text-gray-400 sm:mb-6 md:mb-8 md:text-xl lg:mb-12">
              {heroSectionContent.description as string}
            </p>
          </div>
          <div className="flex space-x-4 pt-4 sm:pt-6 md:pt-8 lg:pt-12">
            <Button asChild>
              <Link href="/dashboard">
                {heroSectionContent.getStartedButton as string}
              </Link>
            </Button>
            <Button variant="outline">
              {heroSectionContent.learnMoreButton as string}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
