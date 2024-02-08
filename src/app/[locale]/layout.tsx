import {getTranslations, unstable_setRequestLocale} from 'next-intl/server';
import {ReactNode} from 'react';
import {locales} from '@/config';


type Props = {
    children: ReactNode;
    params: { locale: string };
};

export function generateStaticParams() {
    return locales.map((locale) => ({locale}));
}

//meta
export async function generateMetadata(props: Props) {
    const {params: {locale}} = props;
    const t = await getTranslations({locale, namespace: 'meta'});
    return {
        title: t('title'),
        description: t('description'),
        keywords: t('keywords'),
    };
}

export default async function LocaleLayout(props: Props) {
    // Enable static rendering
    const {params: {locale}, children} = props;
    unstable_setRequestLocale(locale);

    return (
        <html className="h-full" lang={locale}>
            <body>
                {children}
            </body>
        </html>
    );
}
