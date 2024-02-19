import createMiddleware from 'next-intl/middleware';
import {locales} from "@/config/config";

export default createMiddleware({
  locales,
  defaultLocale: 'en'
});


export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(zh|en|es|ja|fr|de)/:path*']
};
