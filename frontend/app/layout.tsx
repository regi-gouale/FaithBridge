import type { Metadata } from "next";
import { Poppins, Lato } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          `${headingFont.variable} ${bodyFont.variable} antialiased`,
          "h-full"
        )}
      >
        {children}
      </body>
    </html>
  );
}
