import React from 'react';
import Image from "next/image";
import {useTranslations} from "next-intl";
import OlButton from "@/components/shared/OlButton";
import langArr from "@/config/langArr";
import TlButton from './TlButton';
import InputBar from "@/components/shared/InputBar";

const Header = () => {
    const metaT = useTranslations('meta');
    const langT = useTranslations("languages")
    const componentsT = useTranslations("components")
    let localeLangArr: Array<[string, string]> = langArr.map(v => [v, langT(v)]);

    return (
        <header className="w-full h-16 grid grid-cols-3">
            <div className="flex items-center">
                <Image className="object-cover" src="/logo.webp" alt="logo" width={35} height={35}/>
                <span className="sm:flex hidden p-regular-24  ">{metaT('title')}</span>
            </div>
            <div className="flex w-full items-center">
                <Image src="/search.svg" alt="search" width="20" height="20"/>
                <InputBar placeholder={componentsT("inputPlaceholder")}
                          submit={componentsT("buttons.submit")}/>
            </div>
            <div className="flex items-center justify-end gap-3">
                <OlButton langArr={localeLangArr}/>
                <TlButton langArr={localeLangArr}/>
            </div>
        </header>
    );
};

export default Header;
