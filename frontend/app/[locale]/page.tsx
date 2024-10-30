import { auth } from "@/auth";
import { redirect } from "next/navigation";

type HomeProps = Promise<{
  locale: string;
}>;

export default async function Home(props: { params: HomeProps }) {
  const session = await auth();
  const { locale: lang } = await props.params;

  if (session?.user) {
    return (
      <div className="flex w-full flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">Welcome {session.user.email}</h1>
      </div>
    );
  }
  redirect(`/${lang}/sign-in`);
}
