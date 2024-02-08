import React from 'react';
import Image from "next/image";
import {Navbar, NavbarBrand} from "@nextui-org/react";
import {unstable_setRequestLocale} from "next-intl/server";
import {useTranslations} from "next-intl";
import {ComponentLangProps} from "@/types/types";

const Header: React.FC<ComponentLangProps> = ({lang}) => {
    unstable_setRequestLocale(lang);
    const t = useTranslations('meta');

    return (
        <Navbar>
            <NavbarBrand className="flex justify-start">
                <Image src="/logo.webp" alt="logo" width={30} height={30}/>
                <p className="sm:flex hidden p-regular-24  ">{t('title')}</p>
            </NavbarBrand>
        </Navbar>
    );
};

export default Header;
