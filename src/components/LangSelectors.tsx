import React from 'react';
import {Select, SelectItem} from "@nextui-org/select";

const LangSelectors = () => {
    return (
        <Select
            label="Select an animal"
            className="max-w-xs"
        >
            <SelectItem key="12" value="12">123</SelectItem>
            <SelectItem key="13" value="12">123</SelectItem>
        </Select>
    );
};

export default LangSelectors;
