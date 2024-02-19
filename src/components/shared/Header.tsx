import React from 'react';
import Image from "next/image";
import {useTranslations} from "next-intl";
import OlButton from "@/components/shared/OlButton";
import langArr from "@/config/langArr";
import TlButton from './TlButton';
import {Navbar, NavbarBrand, NavbarContent, NavbarItem} from "@nextui-org/navbar";
import LangButton from "@/components/shared/LangButton";
import {ButtonGroup} from "@nextui-org/button";

const Header = () => {
  const metaT = useTranslations('meta');
  const langT = useTranslations("languages")
  let localeLangArr: Array<[string, string]> = langArr.map(v => [v, langT(v)]);

  return (
    <Navbar>
      <NavbarBrand className="flex">
        <Image className="object-cover" src="/logo.webp" alt="logo" width={35} height={35}/>
        <span className="sm:flex hidden">{metaT('title')}</span>
      </NavbarBrand>
      <NavbarContent justify="end">

        <NavbarItem>
          <ButtonGroup>
            <OlButton langArr={localeLangArr}/>
            <TlButton langArr={localeLangArr}/>
            <LangButton/>
          </ButtonGroup>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
