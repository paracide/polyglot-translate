import createMiddleware from 'next-intl/middleware';

import {LOCALES} from "@/i18n";


export default createMiddleware({
  defaultLocale: 'en',
  locales: LOCALES
});


export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(zh|en|es|ja|fr|de)/:path*']
};
