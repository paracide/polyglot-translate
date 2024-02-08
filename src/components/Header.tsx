import React from 'react';
import Image from "next/image";

import {unstable_setRequestLocale} from "next-intl/server";
import {useTranslations} from "next-intl";
import {ComponentLangProps} from "@/types/types";
import {Navbar, NavbarBrand, NavbarContent} from "@nextui-org/navbar";
import OlButton from "@/components/OlButton";
import langArr from "@/config/langArr";

const Header: React.FC<ComponentLangProps> = ({locale}) => {
    unstable_setRequestLocale(locale);
    const metaT = useTranslations('meta');
    const langT = useTranslations("languages")
    let translationArr: Array<[string, string]> = langArr.map(v => [v, langT(v)]);

    return (
        <Navbar>
            <NavbarBrand className="flex justify-start">
                <Image src="/logo.webp" alt="logo" width={30} height={30}/>
                <p className="sm:flex hidden p-regular-24  ">{metaT('title')}</p>
            </NavbarBrand>
            <NavbarContent>
                <OlButton langArr={translationArr}/>
            </NavbarContent>
        </Navbar>
    );
};

export default Header;
