'use client'
import React from "react";
import {persistStore, setTargetLang} from "@/store/store";
import {Checkbox, CheckboxGroup} from "@nextui-org/checkbox";
import LangModal from "./LangModal";
import {useTranslations} from "next-intl";

type Props = {
  langArr: Array<[string, string]>
}

export default function OlButton({langArr}: Readonly<Props>) {
  const componentsT = useTranslations("components")

  return (
    <LangModal title={componentsT('buttons.targetLang')}>
      <CheckboxGroup color="secondary"
                     orientation="horizontal"
                     value={persistStore.targetLang}
                     onValueChange={setTargetLang}>
        {langArr.map(([k, v]) => (
          <Checkbox size="sm" className="max-w-none md:w-48 w-44" key={k} id={k} value={k} color="secondary">
            {v}
          </Checkbox>
        ))}
      </CheckboxGroup>
    </LangModal>


  );
}
