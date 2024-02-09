import React from 'react';
import Image from "next/image";

import {unstable_setRequestLocale} from "next-intl/server";
import {useTranslations} from "next-intl";
import {ComponentLangProps} from "@/types/types";
import OlButton from "@/components/shared/OlButton";
import langArr from "@/config/langArr";
import TlButton from './TlButton';

const Header: React.FC<ComponentLangProps> = ({locale}) => {
    unstable_setRequestLocale(locale);
    const metaT = useTranslations('meta');
    const langT = useTranslations("languages")
    let translationArr: Array<[string, string]> = langArr.map(v => [v, langT(v)]);

    return (
        <header className="w-full border-b">
            <div className="wrapper flex items-center justify-between">
                <Image src="/logo.webp" alt="logo" width={30} height={30}/>
                <p className="sm:flex hidden p-regular-24  ">{metaT('title')}</p>
                <OlButton langArr={translationArr}/>
                <TlButton langArr={translationArr}/>
            </div>
        </header>
    );
};

export default Header;
