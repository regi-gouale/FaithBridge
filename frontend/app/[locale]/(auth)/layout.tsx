import { ReactNode, Suspense } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}
export default function AuthLayout({ children }: AuthLayoutProps) {
  return <Suspense fallback={<SuspenseFallback />}>{children}</Suspense>;
}

export function SuspenseFallback() {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="flex flex-col items-center space-y-4">
        <div className="size-32 animate-spin rounded-full border-4 border-gray-300 border-t-gray-900" />
      </div>
    </div>
  );
}
