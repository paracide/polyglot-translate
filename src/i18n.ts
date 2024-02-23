import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';

//i18n
export const LOCALES = ['en', 'zh', 'fr', 'de', 'ja', 'es'] as const;

export const LOCAL_NAMES = [
  {
    key: "en",
    label: "English",
  },
  {
    key: "zh",
    label: "中文",
  },
  {
    key: "fr",
    label: "Français",
  },
  {
    key: "de",
    label: "Deutsch",
  },
  {
    key: "ja",
    label: "日本語",
  },
  {
    key: "es",
    label: "Español",
  },
]

export default getRequestConfig(async ({locale}) => {
  // Validate that the incoming `locale` parameter is valid
  if (!LOCALES.includes(locale as any)) notFound();
  return {
    messages: (await import(`./constant/messages/${locale}.json`)).default
  };
});
