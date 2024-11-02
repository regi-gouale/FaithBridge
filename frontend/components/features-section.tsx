import fetchContentType, {
  fetchImageUrl,
  StrapiData,
} from "@/lib/strapi/fetchContentType";
import Image from "next/image";

interface FeaturesSectionProps {
  locale: string;
}

export const FeaturesSection = async ({ locale }: FeaturesSectionProps) => {
  const featuresSectionContent = (await fetchContentType(
    "feature-sections",
    `locale=${locale}`
  )) as StrapiData;
  const features = featuresSectionContent.features as StrapiData[];

  return (
    <section className="w-full rounded-md bg-gray-100 py-12 dark:bg-gray-800 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="mb-12 text-center font-heading text-3xl font-semibold tracking-tighter sm:text-4xl md:text-5xl">
          {featuresSectionContent.title as string}
        </h2>
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
          {features.map(async (feature: StrapiData) => {
            const imageUrl = fetchImageUrl(feature.iconUrl as string);
            return (
              <div
                className="flex flex-col items-center text-center"
                key={feature.id}
              >
                <Image
                  src={imageUrl}
                  width={48}
                  height={48}
                  alt={feature.title as string}
                  className="mb-4 text-primary"
                />
                <h3 className="font-heading text-lg font-semibold">
                  {feature.title as string}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description as string}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
