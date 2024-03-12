'use client'
import {useSnapshot} from "valtio";
import {resultStore} from "@/store/store";
import {useTranslations} from "next-intl";
import {Card, CardBody, CardHeader} from "@nextui-org/card";
import {Chip} from "@nextui-org/chip";
import {Snippet} from "@nextui-org/snippet";
import {MdPlayCircleOutline} from "react-icons/md";
import {Button} from "@nextui-org/button";
import {isEmpty} from "@nextui-org/shared-utils";

type Props = {
  lang: string;
}

export default function ResultCard({lang}: Readonly<Props>) {
  const resultSnap = useSnapshot(resultStore);
  const langT = useTranslations("languages")
  const result = resultSnap.results.get(lang);

  return (
    <Card className="w-full">
      <CardHeader className="flex justify-between">
        <div>
          <Chip size="sm" color="default" variant="dot">{langT(lang)}</Chip>
        </div>
        <Button variant="light" isIconOnly size="sm"
                onClick={() => {
                  const utterance = new SpeechSynthesisUtterance();
                  if (!isEmpty(result) && !isEmpty(lang)) {
                    utterance.text = result as string;
                    utterance.lang = lang;
                    window.speechSynthesis.speak(utterance);
                  }
                }}>
          <MdPlayCircleOutline size="20"/>
        </Button>
      </CardHeader>
      <CardBody>
        <Snippet className="h-full" hideSymbol variant="flat" color="default">
          <div className="whitespace-normal">
            {result}
          </div>
        </Snippet>
      </CardBody>
    </Card>
  );
};

