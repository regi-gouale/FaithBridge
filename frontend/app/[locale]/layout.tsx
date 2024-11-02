import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default async function Layout({ children }: LayoutProps) {
  return (
    <main
      className="flex size-full flex-col bg-background"
      suppressHydrationWarning
    >
      {children}
    </main>
  );
}
