import React from "react";
import {RadioGroup} from "@/components/ui/radio-group";
import {Label} from "@/components/ui/label";
import LangDrawer from "./LangDrawer";
import {Checkbox} from "@/components/ui/checkbox";

type Props = {
    langArr: Array<[string, string]>
}

export default function OlButton({langArr}: Props) {
    return (
        <LangDrawer title="Target Lang">
            <RadioGroup className="grid grid-cols-2 lg:grid-cols-7" defaultValue="en">
                {langArr.map(([k, v], index) => (
                    <div key={index} className="flex items-center space-x-2">
                        <Checkbox id={k} value={k}/>
                        <Label
                            htmlFor={k}
                            className="text-sm font-medium leading-none
                            peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            {v}
                        </Label>
                    </div>
                ))}
            </RadioGroup>
        </LangDrawer>
    );
}
