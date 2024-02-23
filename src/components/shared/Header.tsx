import React from 'react';
import Image from "next/image";
import {useTranslations} from "next-intl";
import OlButton from "@/components/shared/OlButton";
import TlButton from './TlButton';
import {Navbar, NavbarBrand, NavbarContent, NavbarItem} from "@nextui-org/navbar";
import LangButton from "@/components/shared/LangButton";
import {Link} from "@nextui-org/link";
import {FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa6";
import {ThemeSwitcher} from "@/components/shared/ThemeSwitcher";
import {SOCIAL_MEDIA} from "../../../PT_CONFIG";
import {SUPPORT_LANG_LIST} from "@/constant/constant";


const Header = () => {
  const metaT = useTranslations('meta');
  const langT = useTranslations("languages")
  let localeLangArr: Array<[string, string]> = SUPPORT_LANG_LIST.map(v => [v, langT(v)]);

  return (
    <Navbar maxWidth='xl' className="bg-transparent">
      <NavbarBrand className="flex">
        <Image className="object-cover" src="/logo.webp" alt="logo" width={35} height={35}/>
        <span className="sm:flex hidden">{metaT('title')}</span>
      </NavbarBrand>

      <NavbarContent justify="end" className="align-middle">
        <NavbarItem className="align-middle hidden sm:flex gap-2">
          <Link aria-label="github" href={SOCIAL_MEDIA.github}>
            <FaGithub color="black"/>
          </Link>
          <Link aria-label="instagram" href={SOCIAL_MEDIA.instagram}>
            <FaInstagram/>
          </Link>
          <Link aria-label="linkedin" href={SOCIAL_MEDIA.linkedin}>
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
