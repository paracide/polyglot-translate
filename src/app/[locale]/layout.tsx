import {getTranslations, unstable_setRequestLocale} from 'next-intl/server';
import {locales} from '@/config/config';
import Header from "@/components/shared/Header";
import {NodeProps} from "@/types/types";
import Footer from "@/components/shared/Footer";
import {NextIntlClientProvider, useMessages} from "next-intl";
import {Providers} from "@/app/[locale]/provider";
import {Analytics} from "@vercel/analytics/next";
import {SpeedInsights} from "@vercel/speed-insights/next";
import {GoogleAnalytics, GoogleTagManager} from '@next/third-parties/google'

export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

//meta
export async function generateMetadata(props: NodeProps) {
  const {params: {locale}} = props;
  const t = await getTranslations({locale, namespace: 'meta'});
  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    icons: {
      icon: '/icon.webp',
    },
  };
}

export default function LocaleLayout(props: Readonly<NodeProps>) {
  // Enable static rendering
  const {params: {locale}, children} = props;
  unstable_setRequestLocale(locale);
  const messages = useMessages();

  return (
    <html lang={locale}>
      <body>
        <Providers>
          <NextIntlClientProvider messages={messages}>
            <main className="purple-dark text-foreground bg-background">
              <Header/>
              {children}
              <Footer/>
            </main>
          </NextIntlClientProvider>
        </Providers>
        <Analytics/>
        <SpeedInsights/>
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GOOGLE_GTM_ID as string}/>
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_GA_ID as string}/>
      </body>
    </html>
  );
}
