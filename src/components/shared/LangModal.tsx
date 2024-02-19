'use client'
import React, {ReactNode} from "react";
import {Modal, ModalFooter, useDisclosure} from "@nextui-org/modal";
import {Button, ModalBody, ModalContent, ModalHeader} from "@nextui-org/react";

type Props = {
  title: string;
  children: ReactNode;
};
export default function OlButton(props: Readonly<Props>) {
  const {title, children} = props;
  const {isOpen, onOpen, onClose} = useDisclosure();

  return (
    <>
      <Button color="primary" onPress={onOpen} variant="light">{title}</Button>
      <Modal disableAnimation scrollBehavior="inside" placement="auto" size="5xl" isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>{title}</ModalHeader>
              <ModalBody>
                {children}
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>

      </Modal>
    </>
  );
}
