'use client'
import React from 'react';
import {Card, CardContent, CardHeader} from "@/components/ui/card";
import {useSnapshot} from "valtio";
import {resultStore} from "@/store/store";
import {useTranslations} from "next-intl";

type Props = {
    lang: string;
}

export default function ResultCard({lang}: Props) {
    const resultSnap = useSnapshot(resultStore);
    const langT = useTranslations("languages")

    return (
        <Card className="w-[350px]">
            <CardHeader>
                <h2>{langT(lang)}</h2>
            </CardHeader>
            <CardContent>
                <p>
                    {resultSnap.results.get(lang)}
                </p>
            </CardContent>
        </Card>
    );
};

