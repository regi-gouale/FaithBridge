import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { i18n } from "@/i18n-config";
import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { auth } from "@/auth";
import { protectedRoutes } from "@/lib/protected-routes";

function getLocale(request: NextRequest): string | undefined {
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  const languages = new Negotiator({ headers: negotiatorHeaders }).languages();

  const locales: string[] = [...i18n.locales];
  return matchLocale(languages, locales, i18n.defaultLocale);
}

export default async function middleware(request: NextRequest) {
  const locale = getLocale(request) || i18n.defaultLocale;
  const pathname = request.nextUrl.pathname;
  const localeProtectedRoutes = protectedRoutes.map(
    (route) => `/${locale}${route}`
  );

  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    return NextResponse.redirect(
      new URL(
        `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
        request.url
      )
    );
  }
  const session = await auth();

  if (localeProtectedRoutes.includes(pathname) && !session?.user) {
    return NextResponse.redirect(new URL(`/${locale}/sign-in`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
