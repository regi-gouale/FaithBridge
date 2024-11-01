import type { Metadata } from "next";
import { Poppins, Lato } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Locale, i18n } from "@/i18n-config";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { ReactNode } from "react";

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
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
