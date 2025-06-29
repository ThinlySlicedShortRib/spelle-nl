import { NextResponse } from 'next/server';

const locales = ['en', 'nl', 'de', 'fr'];
const defaultLocale = 'en';

export function middleware(request) {
  // Check if there is any supported locale in the pathname
  const pathname = request.nextUrl.pathname;
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);

    // e.g. incoming request is /products
    // The new URL is now /en/products
    return NextResponse.redirect(
      new URL(`/${locale}${pathname}`, request.url)
    );
  }
}

function getLocale(request) {
  // Check for locale in Accept-Language header
  const acceptLanguage = request.headers.get('accept-language');
  if (acceptLanguage) {
    const preferredLocale = acceptLanguage
      .split(',')
      .map(lang => lang.split(';')[0].trim())
      .find(lang => {
        // Check exact matches first
        if (locales.includes(lang)) {
          return true;
        }
        // Check for language variants (e.g., 'de-DE', 'fr-FR', 'nl-NL')
        const baseLang = lang.split('-')[0];
        return locales.includes(baseLang);
      });
    
    if (preferredLocale) {
      // If it's a variant (e.g., 'de-DE'), extract the base language
      const baseLang = preferredLocale.split('-')[0];
      return locales.includes(baseLang) ? baseLang : preferredLocale;
    }
  }

  return defaultLocale;
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    // Skip all static files (images, fonts, etc.)
    // Skip all API routes
    '/((?!_next|api|.*\\..*|favicon.ico).*)',
  ],
}; 