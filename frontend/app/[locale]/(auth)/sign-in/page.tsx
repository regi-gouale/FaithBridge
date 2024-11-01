import { AuthHeader } from "@/components/auth/auth-header";
import SignIn from "@/components/auth/signin";
import fetchContentType, { StrapiData } from "@/lib/strapi/fetchContentType";
import Link from "next/link";
// import { redirect } from "next/navigation";

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
    console.log(supportedLanguages);
  }
  console.log(locales);

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
      <footer className="w-full bg-gray-200 p-4 dark:bg-gray-800">
        <div className="container mx-auto text-center text-sm text-gray-600 dark:text-gray-400">
          <p>&copy; 2023 Your Company Name. All rights reserved.</p>
          <div className="mt-2">
            <Link href="/privacy" className="mr-4 hover:underline">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:underline">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
