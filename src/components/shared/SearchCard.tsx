import React from 'react';
import {Card, CardBody} from "@nextui-org/card";
import {useTranslations} from "next-intl";
import {Textarea} from "@nextui-org/input";
import {resultStore} from "@/store/store";
import {Button} from "@nextui-org/react";
import {translateAll} from "@/apis/googleApi";

function SearchCard() {
  const componentsT = useTranslations("components")

  return (
    <Card className="w-full">
      <CardBody>
        <Textarea
          className="w-full"
          placeholder={componentsT('inputPlaceholder')}
          onValueChange={v => resultStore.input = v}/>

        <Button className='absolute bottom-3 right-3 icon-[material-symbols--send]' onClick={translateAll}>
        </Button>
      </CardBody>
    </Card>
  );
}

export default SearchCard;
