'use client'
import React from "react";
import {useSnapshot} from "valtio";
import {persistStore, setTargetLang} from "@/store/store";
import {Checkbox, CheckboxGroup} from "@nextui-org/checkbox";
import LangModal from "./LangModal";
import {useTranslations} from "next-intl";

type Props = {
    langArr: Array<[string, string]>
}

export default function OlButton({langArr}: Props) {
    const langSnap = useSnapshot(persistStore);
    const componentsT = useTranslations("components")

    return (
        <LangModal title={componentsT('buttons.targetLang')}>
            <CheckboxGroup className="columns-7" color="secondary"
                           orientation="horizontal"
                           value={persistStore.targetLang}
                           onValueChange={setTargetLang}>
                {langArr.map(([k, v]) => (
                    <Checkbox className="w-48 max-w-48" key={k} id={k} value={k} color="secondary">
                        {v}
                    </Checkbox>
                ))}
            </CheckboxGroup>
        </LangModal>


    );
}
