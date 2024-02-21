import React from 'react';
import Image from "next/image";
import {useTranslations} from "next-intl";
import OlButton from "@/components/shared/OlButton";
import langArr from "@/config/langArr";
import TlButton from './TlButton';
import LangButton from "@/components/shared/LangButton";
import Link from "next/link";


const Header = () => {
  const metaT = useTranslations('meta');
  const langT = useTranslations("languages")
  let localeLangArr: Array<[string, string]> = langArr.map(v => [v, langT(v)]);

  return (
    <header className="bg-transparent wrapper flex justify-between">
      <div className="flex items-center">
        <Image className="object-cover" src="/logo.webp" alt="logo" width={48} height={48}/>
        <span className="sm:flex hidden">{metaT('title')}</span>
      </div>

      <div className="flex gap-2 items-center">
        <div className="align-middle hidden sm:flex gap-2">
          <Link aria-label="github" className="text-xl icon-[skill-icons--github-light]"
                href={process.env.LINK_GITHUB as string}/>
          <Link aria-label="instagram" className="text-xl icon-[skill-icons--instagram]"
                href={process.env.LINK_INSTAGRAM as string}/>
          <Link aria-label="linkedin" className="text-xl icon-[skill-icons--linkedin]"
                href={process.env.LINK_LINKEDIN as string}/>
        </div>
        <div className="flex align-middle gap-2">
          <OlButton langArr={localeLangArr}/>
          <TlButton langArr={localeLangArr}/>
        </div>
        <div className="flex align-middle">
          <LangButton/>
        </div>
      </div>
    </header>
  );
};

export default Header;
