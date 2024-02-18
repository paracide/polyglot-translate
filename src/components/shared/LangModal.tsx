'use client'
import React, {ReactNode} from "react";
import {Modal, useDisclosure} from "@nextui-org/modal";
import {Button, ModalBody, ModalContent, ModalHeader} from "@nextui-org/react";

type Props = {
  title: string;
  children: ReactNode;
};
export default function OlButton(props: Props) {
  const {title, children} = props;
  const {isOpen, onOpen, onClose} = useDisclosure();

  return (
    <>
      <Button onPress={onOpen}>{title}</Button>
      <Modal disableAnimation scrollBehavior="inside" placement="auto" size="5xl" isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
              <ModalBody>
                {children}
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
