'use client'
import React from "react";
import {useSnapshot} from "valtio";
import {persistStore} from "@/store/store";
import {Radio, RadioGroup} from "@nextui-org/radio";
import LangModal from "./LangModal";
import {useTranslations} from "next-intl";

type Props = {
  langArr: Array<[string, string]>
}

export default function OlButton({langArr}: Props) {
  const persistSnap = useSnapshot(persistStore);
  const componentsT = useTranslations("components")
  const languageT = useTranslations("languages")

  return (
    <LangModal title={languageT(persistSnap.origLang)}>
      <RadioGroup className="w-full flex-wrap" orientation="horizontal"
                  defaultValue={persistSnap.origLang}
                  onValueChange={v => persistStore.origLang = v}
      >
        {langArr.map(([k, v], index) => (
          <Radio size="sm" color="primary" className="w-48 max-w-48" key={index} value={k}>
            {v}
          </Radio>
        ))}
      </RadioGroup>
    </LangModal>

  );
}
