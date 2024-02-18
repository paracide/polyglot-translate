'use client'
import React from 'react';
import {useSnapshot} from "valtio";
import {resultStore} from "@/store/store";
import {useTranslations} from "next-intl";
import {Card, CardBody, CardHeader} from "@nextui-org/card";

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
            <CardBody>
                <p>
                    {resultSnap.results.get(lang)}
                </p>
            </CardBody>
        </Card>
    );
};

