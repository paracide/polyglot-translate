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
        <header className="w-full border-b">
            <div className="wrapper flex items-center justify-between">
                <Image src="/logo.webp" alt="logo" width={30} height={30}/>
                <p className="sm:flex hidden p-regular-24  ">{metaT('title')}</p>
                <InputBar placeholder={componentsT("inputPlaceholder")}
                          submit={componentsT("buttons.submit")}/>
                <OlButton langArr={localeLangArr}/>
                <TlButton langArr={localeLangArr}/>
            </div>
        </header>
    );
};

export default Header;
