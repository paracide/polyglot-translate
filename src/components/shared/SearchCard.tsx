import React from 'react';
import {useTranslations} from "next-intl";
import {persistStore, resultStore} from "@/store/store";
import {useSnapshot} from "valtio";
import {translateAll} from "@/apis/googleApi";
import {Card, CardContent, CardHeader} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {Textarea} from "@/components/ui/textarea";

function SearchCard() {
  const componentsT = useTranslations("components");
  const languageT = useTranslations("languages")
  const persistSnap = useSnapshot(persistStore);

  function copyAll() {
    navigator.clipboard.writeText(persistStore.targetLang.map(v => resultStore.results.get(v)).join("\t"));
  }

  return (
    <Card className="w-full">
      <CardHeader className="justify-between overflow-hidden">
        <Badge color="primary" variant="outline">{languageT(persistSnap.sourceLang)}</Badge>
        <Badge color="primary" className="h-6 icon-[material-symbols--send]"
               onClick={translateAll}/>
        <Badge color="success" className="h-6 icon-[ph--copy]"
               onClick={copyAll}/>
      </CardHeader>
      <CardContent>
        <Textarea
          className="w-full h-full"
          placeholder={componentsT('inputPlaceholder')}
          onChange={v => resultStore.input = v.target.value}/>
      </CardContent>
    </Card>
  );
}

export default SearchCard;
