'use client'
import React from "react";
import {useSnapshot} from "valtio";
import {persistStore} from "@/store/store";
import {Radio, RadioGroup} from "@nextui-org/radio";
import LangDrawer from "./LangDrawer";

type Props = {
    langArr: Array<[string, string]>
}

export default function OlButton({langArr}: Props) {
    const originLangSnap = useSnapshot(persistStore);
    return (
        <LangDrawer title="Origin Lang">
            <RadioGroup
                label={'Origin:' + originLangSnap.origLang}
                orientation="horizontal"
            >
                {langArr.map(([k, v], index) => (
                    <Radio key={index} value={k}>
                        {v}
                    </Radio>
                ))}
            </RadioGroup>
        </LangDrawer>

    );
}
