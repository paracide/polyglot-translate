'use client'
import React from "react";
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group";
import {Label} from "@/components/ui/label";
import LangDrawer from "./LangDrawer";
import {useSnapshot} from "valtio";
import {persistStore} from "@/store/store";

type Props = {
    langArr: Array<[string, string]>
}

export default function OlButton({langArr}: Props) {
    const originLangSnap = useSnapshot(persistStore);
    return (
        <LangDrawer title={'Origin:' + originLangSnap.origLang}>
            <RadioGroup className="grid grid-cols-2 lg:grid-cols-7" defaultValue={originLangSnap.origLang}
                        onValueChange={v => persistStore.origLang = v}
            >
                {langArr.map(([k, v], index) => (
                    <div key={index}
                         className="flex items-center space-x-2">
                        <RadioGroupItem value={k} id={k}
                        />
                        <Label htmlFor={k}>{v}</Label>
                    </div>
                ))}
            </RadioGroup>
        </LangDrawer>
    );
}
