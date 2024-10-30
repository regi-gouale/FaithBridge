import { auth } from "@/auth";
import SignIn from "@/components/auth/signin";

export default async function Home() {
  const session = await auth();
  if (session?.user) {
    return (
      <div className="flex w-full flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">Welcome {session.user.email}</h1>
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <SignIn />
    </div>
  );
}
