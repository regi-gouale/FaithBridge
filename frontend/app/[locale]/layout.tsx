import { ReactNode, Suspense } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default async function Layout({ children }: LayoutProps) {
  return (
    <Suspense fallback={<SuspenseFallback />}>
      <main className="flex size-full flex-col bg-background">{children}</main>
    </Suspense>
  );
}

function SuspenseFallback() {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="flex flex-col items-center space-y-4">
        <div className="size-12 animate-spin rounded-full border-4 border-gray-300 border-t-gray-900" />
      </div>
    </div>
  );
}
