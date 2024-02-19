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

export default function OlButton({langArr}: Readonly<Props>) {
  const persistSnap = useSnapshot(persistStore);
  const languageT = useTranslations("languages")

  return (
    <LangModal title={languageT(persistSnap.origLang)}>
      <RadioGroup className="flex justify-between flex-wrap" orientation="horizontal"
                  defaultValue={persistSnap.origLang}
                  onValueChange={v => persistStore.origLang = v}
      >
        {langArr.map(([k, v]) => (
          <Radio size="sm" className="max-w-none md:w-48 w-44" key={k} value={k}>
            {v}
          </Radio>
        ))}
      </RadioGroup>
    </LangModal>

  );
}
