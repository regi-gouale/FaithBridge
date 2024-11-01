import React from "react";
import { Button } from "@/components/ui/button";
import fetchContentType, { StrapiData } from "@/lib/strapi/fetchContentType";

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
            <h1 className="font-heading text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              {heroSectionContent.mainText}
            </h1>
            <p className="mx-auto max-w-3xl font-body text-gray-500 dark:text-gray-400 md:text-xl">
              {heroSectionContent.description}
            </p>
          </div>
          <div className="space-x-4">
            <Button>{heroSectionContent.getStartedButton}</Button>
            <Button variant="outline">{heroSectionContent.learnMoreButton}</Button>
          </div>
        </div>
      </div>
    </section>
  );
};
