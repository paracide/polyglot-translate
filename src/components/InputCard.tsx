import React from 'react';
import {Card, CardHeader} from "@nextui-org/card";
import {Textarea} from "@nextui-org/input";
import LangSelector from "@/components/LangSelector";
import {useTranslations} from "next-intl";
import langArr from "@/config/langArr";

const InputCard = () => {
    const t = useTranslations("languages")
    let translationArr: Array<[string, string]> = langArr.map(v => [v, t(v)]);
    return (
        <Card className="max-w-xl">
            <CardHeader>
                <LangSelector langArr={translationArr}/>
            </CardHeader>
            <Textarea
                placeholder="Enter your description"
            />
        </Card>
    );
};

export default InputCard;
