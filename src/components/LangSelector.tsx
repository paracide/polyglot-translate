'use client'
import React from 'react';
import {Select, SelectItem} from "@nextui-org/select";

type Props = {
    langArr: Array<[string, string]>
}

const LangSelector: React.FC<Props> = ({langArr}) => {
    return (
        <Select>
            {
                langArr.map(([k, v], index) =>
                    <SelectItem key={index} value={k}>
                        {v}
                    </SelectItem>
                )
            }
        </Select>
    );
};

export default LangSelector;
