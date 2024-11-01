import { AuthFooter } from "@/components/auth/auth-footer";
import { AuthHeader } from "@/components/auth/auth-header";
import SignIn from "@/components/auth/signin";
import fetchContentType, { StrapiData } from "@/lib/strapi/fetchContentType";

type SignInPageProps = Promise<{
  locale: string;
}>;

export default async function SignInPage(props: { params: SignInPageProps }) {
  const { locale } = await props.params;

  const url = "http://localhost:1337/api/i18n/locales";

  const response = await fetch(url, {
    method: "GET",
    cache: "no-store",
  });

  const locales: string[] = [];
  if (response.ok) {
    const supportedLanguages = await response.json();
    supportedLanguages.forEach((language: StrapiData) => {
      locales.push(language.name as string);
    });
  }

  const signInPageContent = (await fetchContentType(
    "signins",
    `locale=${locale}`
  )) as StrapiData;

  return (
    <div className="flex min-h-screen flex-col">
      <header className="my-4 w-full p-4">
        <AuthHeader
          locales={locales}
          signButtonText={signInPageContent.signUpText as string}
        />
      </header>
      <main className="flex grow items-center justify-center px-4">
        <SignIn data={signInPageContent} />
      </main>
      <AuthFooter />
    </div>
  );
}
