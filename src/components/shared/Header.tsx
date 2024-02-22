import React from 'react';
import Image from "next/image";
import {useTranslations} from "next-intl";
import OlButton from "@/components/shared/OlButton";
import langArr from "@/config/langArr";
import TlButton from './TlButton';
import {Navbar, NavbarBrand, NavbarContent, NavbarItem} from "@nextui-org/navbar";
import LangButton from "@/components/shared/LangButton";
import {Link} from "@nextui-org/link";
import {FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa6";
import {ThemeSwitcher} from "@/components/shared/ThemeSwitcher";


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

      <NavbarContent justify="end" className="align-middle">
        <NavbarItem className="align-middle hidden sm:flex gap-2">
          <Link aria-label="github" href={process.env.LINK_GITHUB}>
            <FaGithub/>
          </Link>
          <Link aria-label="instagram" href={process.env.LINK_INSTAGRAM}>
            <FaInstagram/>
          </Link>
          <Link aria-label="linkedin" href={process.env.LINK_LINKEDIN}>
            <FaLinkedin/>
          </Link>
          <ThemeSwitcher/>
        </NavbarItem>
        <NavbarItem className="flex align-middle gap-2">
          <OlButton langArr={localeLangArr}/>
          <TlButton langArr={localeLangArr}/>
        </NavbarItem>
        <NavbarItem className="flex align-middle">
          <LangButton/>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
