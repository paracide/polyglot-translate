import React from 'react';
import Image from "next/image";
import {useTranslations} from "next-intl";
import OlButton from "@/components/shared/OlButton";
import langArr from "@/config/langArr";
import TlButton from './TlButton';
import {Navbar, NavbarBrand, NavbarContent, NavbarItem} from "@nextui-org/navbar";
import LangButton from "@/components/shared/LangButton";
import {ButtonGroup} from "@nextui-org/button";
import {Link} from "@nextui-org/link";


const Header = () => {
  const metaT = useTranslations('meta');
  const langT = useTranslations("languages")
  let localeLangArr: Array<[string, string]> = langArr.map(v => [v, langT(v)]);

  return (
    <Navbar maxWidth='xl' className="bg-transparent">
      <NavbarBrand className="flex">
        <Image className="object-cover" src="/logo.webp" alt="logo" width={35} height={35}/>
        <span className="sm:flex hidden">{metaT('title')}</span>
      </NavbarBrand>

      <NavbarContent justify="end">
        <NavbarItem className="hidden sm:flex gap-2">
          <Link aria-label="github" className="text-xl icon-[skill-icons--github-light]"
                href={process.env.LINK_GITHUB}/>
          <Link aria-label="instagram" className="text-xl icon-[skill-icons--instagram]"
                href={process.env.LINK_INSTAGRAM}/>
          <Link aria-label="linkedin" className="text-xl icon-[skill-icons--linkedin]"
                href={process.env.LINK_LINKEDIN}/>
        </NavbarItem>
        <NavbarItem>
          <ButtonGroup variant="flat" radius="full">
            <OlButton langArr={localeLangArr}/>
            <TlButton langArr={localeLangArr}/>
          </ButtonGroup>
        </NavbarItem>
        <NavbarItem>
          <LangButton/>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
