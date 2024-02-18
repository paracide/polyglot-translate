import React from 'react';
import Image from "next/image";
import {useTranslations} from "next-intl";
import OlButton from "@/components/shared/OlButton";
import langArr from "@/config/langArr";
import TlButton from './TlButton';
import InputBar from "@/components/shared/InputBar";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem} from "@nextui-org/navbar";

const Header = () => {
    const metaT = useTranslations('meta');
    const langT = useTranslations("languages")
    const componentsT = useTranslations("components")
    let localeLangArr: Array<[string, string]> = langArr.map(v => [v, langT(v)]);

    return (
        <Navbar>
            <NavbarBrand>
                <Image className="object-cover" src="/logo.webp" alt="logo" width={35} height={35}/>
                <span className="sm:flex hidden p-regular-24  ">{metaT('title')}</span>
            </NavbarBrand>
            <NavbarContent>
                <NavbarItem>
                    <InputBar placeholder={componentsT("inputPlaceholder")}
                              submit={componentsT("buttons.submit")}/>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent>
                <NavbarItem>
                    <OlButton langArr={localeLangArr}/>
                </NavbarItem>
                <NavbarItem>
                    <TlButton langArr={localeLangArr}/>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
};

export default Header;
