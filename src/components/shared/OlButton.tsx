'use client'
import React from "react";
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group";
import {Label} from "@/components/ui/label";
import LangDrawer from "./LangDrawer";
import {useSnapshot} from "valtio";
import {storageStore} from "@/store/store";

type Props = {
    langArr: Array<[string, string]>
}

export default function OlButton({langArr}: Props) {
    const originLangSnap = useSnapshot(storageStore);
    return (
        <LangDrawer title={'Origin:' + originLangSnap.lang}>
            <RadioGroup className="grid grid-cols-2 lg:grid-cols-7" defaultValue={originLangSnap.lang}
                        onValueChange={v => storageStore.lang = v}
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
