import {getTranslations, unstable_setRequestLocale} from 'next-intl/server';
import {locales} from '@/config/config';
import {Providers} from "@/app/providers";
import Header from "@/components/Header";
import {NodeProps} from "@/types/types";
import Footer from "@/components/Footer";


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
    };
}

export default async function LocaleLayout(props: NodeProps) {
    // Enable static rendering
    const {params: {locale}, children} = props;
    unstable_setRequestLocale(locale);

    return (
        <html lang={locale}>
            <body>
                <Providers>
                    <Header locale={locale}/>
                    {children}
                    <Footer/>
                </Providers>
            </body>
        </html>
    );
}
