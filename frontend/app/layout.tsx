import type { Metadata } from "next";
import { Poppins, Lato } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Locale, i18n } from "@/i18n-config";
import { ReactNode, Suspense } from "react";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { TailwindIndicator } from "@/components/theme/tailwind-indicator";

const headingFont = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-heading",
  subsets: ["latin"],
});

const bodyFont = Lato({
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Auth Application using Next.js",
  description:
    "This is an example of an authentication application using Next.js",
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: ReactNode;
  params: { locale: Locale };
}>) {
  return (
    <html lang={params.locale}>
      <body
        className={cn(
          `${headingFont.variable} ${bodyFont.variable} antialiased`,
          "h-full"
        )}
      >
        <Suspense fallback={<SuspenseFallback />}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <TailwindIndicator />
          </ThemeProvider>
        </Suspense>
      </body>
    </html>
  );
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
