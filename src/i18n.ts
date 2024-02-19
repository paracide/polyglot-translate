import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';
import {localePrefix, locales} from "@/config/config";
import {createSharedPathnamesNavigation} from "next-intl/navigation";

export const {Link, redirect, usePathname, useRouter} =
  createSharedPathnamesNavigation({locales, localePrefix});

export default getRequestConfig(async ({locale}) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();
  return {
    messages: (await import(`../messages/${locale}.json`)).default
  };
});
