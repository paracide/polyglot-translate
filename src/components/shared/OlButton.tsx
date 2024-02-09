'use client'
import React from "react";
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group";
import {Label} from "@/components/ui/label";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger
} from "@/components/ui/drawer";
import {Button} from "@/components/ui/button";
import {ScrollArea} from "@/components/ui/scroll-area";

type Props = {
    langArr: Array<[string, string]>
}

export default function OlButton({langArr}: Props) {
    const radios = langArr.map(([k, v], index) => (
        <div key={index} className="flex items-center space-x-2">
            <RadioGroupItem value={k} id={k}/>
            <Label htmlFor={k}>{v}</Label>
        </div>
    ));
    return (
        <Drawer>
            <DrawerTrigger>Open</DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle>Original Language</DrawerTitle>
                    <DrawerDescription>
                        <ScrollArea className="h-96 w-screen">
                            <RadioGroup className="grid grid-cols-2 lg:grid-cols-7" defaultValue="en">
                                {radios}
                            </RadioGroup>
                        </ScrollArea>
                    </DrawerDescription>
                </DrawerHeader>
                <DrawerFooter>
                    <DrawerClose>
                        <Button>OK</Button>
                        <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
}
