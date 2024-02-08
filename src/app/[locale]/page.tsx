import {useTranslations} from 'next-intl';
import {unstable_setRequestLocale} from 'next-intl/server';
import InputCard from "@/components/InputCard";
import React from "react";

type Props = {
    params: { locale: string };
};

export default function IndexPage(props: Props) {
    // Enable static rendering
    const {params: {locale}} = props;
    unstable_setRequestLocale(locale);
    const t = useTranslations('meta');

    return (
        <main className="grid grid-cols-6">
            <InputCard/>


        </main>
    );
}
