import React from 'react';
import {Card, CardBody, CardHeader} from "@nextui-org/card";
import {useTranslations} from "next-intl";
import {Textarea} from "@nextui-org/input";
import {persistStore, resultStore} from "@/store/store";
import {useSnapshot} from "valtio";
import {Chip} from "@nextui-org/chip";
import {Button} from "@nextui-org/react";
import {translateAll} from "@/apis/googleApi";
import {ButtonGroup} from "@nextui-org/button";

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
        <Chip size="sm" color="primary" variant="flat">{languageT(persistSnap.sourceLang)}</Chip>
        <Chip size="sm" variant="light">
          <ButtonGroup>
            <Button color="primary" className="h-6 icon-[material-symbols--send]" isIconOnly
                    onClick={translateAll}/>
            <Button color="success" className="h-6 icon-[ph--copy]" isIconOnly
                    onClick={copyAll}/>
          </ButtonGroup>
        </Chip>
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
