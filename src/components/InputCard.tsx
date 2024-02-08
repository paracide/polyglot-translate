import React from 'react';
import {Card, CardHeader} from "@nextui-org/card";
import {Textarea} from "@nextui-org/input";
import LangSelectorWrap from "@/components/LangSelectorWrap";

const InputCard = () => {
    return (
        <Card className="max-w-xl">
            <CardHeader>
                <LangSelectorWrap/>
            </CardHeader>
            <Textarea
                placeholder="Enter your description"
            />
        </Card>
    );
};

export default InputCard;
