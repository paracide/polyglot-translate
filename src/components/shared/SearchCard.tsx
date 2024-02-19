import React from 'react';
import {Card, CardBody, CardHeader} from "@nextui-org/card";
import {useTranslations} from "next-intl";
import {Textarea} from "@nextui-org/input";
import {persistStore, resultStore} from "@/store/store";
import {Button} from "@nextui-org/react";
import {translateAll} from "@/apis/googleApi";
import {useSnapshot} from "valtio";

function SearchCard() {
  const componentsT = useTranslations("components");
  const languageT = useTranslations("languages")
  const persistSnap = useSnapshot(persistStore);


  return (
    <Card className="w-full">
      <CardHeader>
        <h2>{languageT(persistSnap.origLang)}</h2>
        <Button className='absolute right-3 icon-[material-symbols--send]' onClick={translateAll}></Button>
      </CardHeader>
      <CardBody>
        <Textarea
          className="w-full h-full"
          minRows={2}
          placeholder={componentsT('inputPlaceholder')}
          onValueChange={v => resultStore.input = v}/>

      </CardBody>
    </Card>
  );
}

export default SearchCard;
