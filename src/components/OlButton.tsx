'use client'
import React from "react";
import {Radio, RadioGroup} from "@nextui-org/radio";
import {Button} from "@nextui-org/button";
import {useDisclosure} from "@nextui-org/use-disclosure";
import {Modal, ModalBody, ModalContent, ModalHeader} from "@nextui-org/modal";

type Props = {
    langArr: Array<[string, string]>
}

export default function OlButton({langArr}: Props) {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    return (
        <>
            <Button onPress={onOpen}>Open Modal</Button>
            <Modal size="full" isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <section>
                            <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
                            <ModalBody>
                                <RadioGroup orientation="horizontal">
                                    {
                                        langArr.map(([k, v], index) => (
                                            <Radio size="sm" className="w-36 max-w-36" key={index} value={k}>{v}</Radio>
                                        ))
                                    }
                                </RadioGroup>
                            </ModalBody>
                        </section>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
