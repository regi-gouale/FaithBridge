import { auth } from "@/auth";
import SignIn from "@/components/auth/signin";
import fetchContentType, { StrapiData } from "@/lib/strapi/fetchContentType";
import { redirect } from "next/navigation";

type SignInPageProps = Promise<{
  locale: string;
}>;

export default async function SignInPage(props: { params: SignInPageProps }) {
  const { locale } = await props.params;
  const session = await auth();

  if (session?.user) {
    redirect(`/${locale}/`);
  }

  const signInPageContent = (await fetchContentType(
    "signins",
    `locale=${locale}`
  )) as StrapiData;

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <SignIn data={signInPageContent} />
    </div>
  );
}
