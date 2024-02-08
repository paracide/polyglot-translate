import React from 'react';
import {Card, CardHeader} from "@nextui-org/card";
import {Textarea} from "@nextui-org/input";
import {ComponentLangProps} from "@/types/types";
import LangSelectors from "@/components/LangSelectors";

const InputCard: React.FC<ComponentLangProps> = ({locale}) => {
    return (
        <Card className="max-w-xl">
            <CardHeader>
                <LangSelectors/>
            </CardHeader>
            <Textarea
                placeholder="Enter your description"
            />
        </Card>
    );
};

export default InputCard;
