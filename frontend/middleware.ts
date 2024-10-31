import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { i18n } from "@/i18n-config";
import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { auth } from "@/auth";

function getLocale(request: NextRequest): string | undefined {
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  const languages = new Negotiator({ headers: negotiatorHeaders }).languages();

  const locales: string[] = [...i18n.locales];
  return matchLocale(languages, locales, i18n.defaultLocale);
}

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Vérification de l'authentification
  const locale = getLocale(request) || i18n.defaultLocale;
  const session = await auth();
  if (!session?.user && !pathname.startsWith(`/${locale}/sign-in`)) {
    return NextResponse.redirect(new URL(`/${locale}/sign-in`, request.url));
  } else if (session?.user && pathname.startsWith(`/${locale}/sign-in`)) {
    return NextResponse.redirect(new URL(`/${locale}`, request.url));
  }

  if (pathnameIsMissingLocale) {
    return NextResponse.redirect(
      new URL(
        `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
        request.url
      )
    );
  }

  // Ajoutez cette ligne pour éviter de continuer l'exécution après la redirection
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
