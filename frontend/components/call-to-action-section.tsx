import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import fetchContentType, { StrapiData } from "@/lib/strapi/fetchContentType";

//call-to-action-sections
interface CallToActionSectionProps {
  locale: string;
}

export const CallToActionSection = async ({
  locale,
}: CallToActionSectionProps) => {
  const callToActionsSectionContent = (await fetchContentType(
    "call-to-action-sections",
    `locale=${locale}`
  )) as StrapiData;

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-4">
            <h2 className="mb-4 font-heading text-3xl font-semibold tracking-tighter sm:text-4xl md:text-5xl">
              {callToActionsSectionContent.title as string}
            </h2>
            <p className="mx-auto mb-4 max-w-2xl text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {callToActionsSectionContent.description as string}
            </p>
          </div>
          <div className="w-full max-w-sm space-y-2">
            <form className="flex space-x-2">
              <Input
                className="max-w-lg flex-1"
                placeholder={
                  callToActionsSectionContent.inputPlaceholder as string
                }
                type="email"
              />
              <Button type="submit" className="font-heading font-medium">
                {callToActionsSectionContent.getStartedButton as string}
              </Button>
            </form>
            <p className="text-xs text-muted-foreground">
              {callToActionsSectionContent.subDescription as string}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
