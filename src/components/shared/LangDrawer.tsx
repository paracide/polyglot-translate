'use client'
import React, {ReactNode} from "react";
import {Modal, useDisclosure} from "@nextui-org/modal";
import {Button, ModalBody, ModalContent, ModalFooter, ModalHeader} from "@nextui-org/react";

type Props = {
    title: string;
    children: ReactNode;
};
export default function OlButton(props: Props) {
    const {title, children} = props;
    const {isOpen, onOpen, onClose} = useDisclosure();

    return (
        <>
            <Button onPress={onOpen}>O Lang</Button>
            <Modal size="full" isOpen={isOpen} onClose={onClose}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
                            <ModalBody>
                                {children}
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                                <Button color="primary" onPress={onClose}>
                                    Action
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
