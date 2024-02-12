'use client'
import ResultCard from '@/components/shared/ResultCard';
import React from "react";
import {storageStore} from "@/store/store";
import {useTranslations} from "next-intl";
import {useSnapshot} from "valtio";

export default function IndexPage() {
    const storageSnap = useSnapshot(storageStore);
    const langT = useTranslations("languages")

    return (
        <main className="grid grid-cols-2">
            {
                storageSnap.targetLang.map(lang =>
                    <ResultCard key={lang} lang={langT(lang)}/>
                )
            }
        </main>
    );
}
