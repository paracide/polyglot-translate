import {getTranslations, unstable_setRequestLocale} from 'next-intl/server';
import {locales} from '@/config/config';
import Header from "@/components/shared/Header";
import {NodeProps} from "@/types/types";
import Footer from "@/components/shared/Footer";


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
                <Header locale={locale}/>
                {children}
                <Footer/>
            </body>
        </html>
    );
}
