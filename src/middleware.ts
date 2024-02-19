import createMiddleware from 'next-intl/middleware';
import {localePrefix, locales} from "@/config/config";

export default createMiddleware({
  locales,
  localePrefix,
  defaultLocale: 'en'
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(zh|en)/:path*']
};
