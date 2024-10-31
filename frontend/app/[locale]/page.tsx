import { auth } from "@/auth";
import { SignOutButton } from "@/components/auth/signin-buttons";


export default async function Home() {
  const session = await auth();
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <h1 className="text-2xl font-bold">Welcome {session?.user?.email}</h1>
      <form
        action={async () => {
          "use server";
          await SignOutButton();
        }}
      >
        <button type="submit">Sign Out</button>
      </form>
    </div>
  );
}
