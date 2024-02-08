'use client'
import React from 'react';
import {Select, SelectItem} from "@nextui-org/select";

type Props = {
    langArr: Array<[string, string]>;
}

function LangSelector({langArr}: Props) {
    return (
        <Select
            selectionMode="multiple"
        >
            {
                langArr.map(([k, v], index) => (
                    <SelectItem key={index} value={k}>
                        {v}
                    </SelectItem>
                ))
            }
        </Select>
    );
}

export default LangSelector;
