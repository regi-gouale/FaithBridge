import { Header } from "@/components/header";
import { HeroSection } from "@/components/home/hero-section";
import { FeaturesSection } from "@/components/home/features-section";
import { CallToActionSection } from "@/components/home/call-to-action-section";
import { Footer } from "@/components/footer";

type HomePageProps = Promise<{
  locale: string;
}>;

export default async function HomePage(props: { params: HomePageProps }) {
  const { locale } = await props.params;

  return (
    <div className="mx-auto flex min-h-screen flex-col">
      <Header locale={locale} />
      <main className="flex-1">
        <HeroSection locale={locale} />
        <FeaturesSection locale={locale} />
        <CallToActionSection locale={locale} />
      </main>
      <Footer />
    </div>
  );
}
