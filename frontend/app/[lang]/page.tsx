import { auth } from "@/auth";
import SignIn from "@/components/auth/signin";
import fetchContentType from "@/lib/strapi/fetchContentType";

type HomeProps = Promise<{
  lang: string;
}>;

export default async function Home(props: { params: HomeProps }) {
  const session = await auth();
  const { lang } = await props.params;

  const signInData = await fetchContentType("signins", `locale=${lang}`);

  if (!signInData) {
    return <div>Failed to fetch data</div>;
  }

  if (Array.isArray(signInData)) {
    return <div>Failed to fetch data</div>;
  }

  const {
    loginText,
    loginDescription,
    email,
    emailPlaceholder,
    loginButton,
    loginWithButton,
    signUpLink,
    dontHaveAccount,
    password,
  } = signInData;

  if (session?.user) {
    return (
      <div className="flex w-full flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">Welcome {session.user.email}</h1>
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <SignIn
        loginText={loginText}
        loginDescription={loginDescription}
        email={email}
        emailPlaceholder={emailPlaceholder}
        loginButton={loginButton}
        loginWithButton={loginWithButton}
        signUpLink={signUpLink}
        dontHaveAccount={dontHaveAccount}
        password={password}
      />
    </div>
  );
}
