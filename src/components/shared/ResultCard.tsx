'use client'
import React from 'react';
import {useSnapshot} from "valtio";
import {resultStore} from "@/store/store";
import {useTranslations} from "next-intl";
import {Card, CardBody, CardHeader} from "@nextui-org/card";
import {Chip} from "@nextui-org/chip";
import {Snippet} from "@nextui-org/snippet";

type Props = {
  lang: string;
}

export default function ResultCard({lang}: Readonly<Props>) {
  const resultSnap = useSnapshot(resultStore);
  const langT = useTranslations("languages")

  return (
    <Card className="w-full">
      <CardHeader>
        <div>
          <Chip size="sm" color="default" variant="dot">{langT(lang)}</Chip>
        </div>
      </CardHeader>
      <CardBody>
        <Snippet className="h-full" hideSymbol variant="flat" color="default">
          <div className="whitespace-normal">
            {resultSnap.results.get(lang)}
          </div>
        </Snippet>
      </CardBody>
    </Card>
  );
};

