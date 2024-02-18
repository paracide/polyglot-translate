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
    const originLangSnap = useSnapshot(persistStore);
    const componentsT = useTranslations("components")

    return (
        <LangModal title={componentsT('buttons.originalLang')}>
            <RadioGroup orientation="horizontal" defaultValue={originLangSnap.origLang}
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
