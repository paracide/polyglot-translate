'use client'
import React from "react";
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group";
import {useSnapshot} from "valtio";
import {persistStore} from "@/store/store";
import LangModal from "@/components/shared/LangModal";
import {Label} from "@/components/ui/label";

type Props = {
  langArr: Array<[string, string]>
}

export default function OlButton({langArr}: Props) {
  const originLangSnap = useSnapshot(persistStore);
  return (
    <LangModal title={'Origin:' + persistStore.sourceLang}>
      <RadioGroup className="grid grid-cols-2 lg:grid-cols-7" defaultValue={persistStore.sourceLang}
                  onValueChange={v => persistStore.sourceLang = v}
      >
        {langArr.map(([k, v], index) => (
          <div key={index}
               className="flex items-center space-x-2">
            <RadioGroupItem value={k} id={k}/>
            <Label htmlFor={k}>{v}</Label>
          </div>
        ))}
      </RadioGroup>
    </LangModal>
  );
}
