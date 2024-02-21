'use client'
import React from 'react';
import {useSnapshot} from "valtio";
import {resultStore} from "@/store/store";
import {useTranslations} from "next-intl";
import {Card, CardContent, CardHeader} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";

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
          <Badge color="default" variant="outline">{langT(lang)}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="whitespace-normal">
          {resultSnap.results.get(lang)}
        </div>
      </CardContent>
    </Card>
  );
};

