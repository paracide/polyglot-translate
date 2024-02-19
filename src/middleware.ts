import createMiddleware from 'next-intl/middleware';
import {localePrefix, locales} from "@/config/config";


export default createMiddleware({
  defaultLocale: 'en',
  localePrefix,
  locales
});


export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(zh|en|es|ja|fr|de)/:path*']
};
