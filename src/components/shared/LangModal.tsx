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
      <Button color="primary" onPress={onOpen} variant="flat">{title}</Button>
      <Modal scrollBehavior="inside" size="5xl" isOpen={isOpen} onClose={onClose}
             motionProps={{
               variants: {
                 enter: {
                   y: 0,
                   opacity: 1,
                   transition: {
                     duration: 0.3,
                     ease: "easeOut",
                   },
                 },
                 exit: {
                   y: -20,
                   opacity: 0,
                   transition: {
                     duration: 0.2,
                     ease: "easeIn",
                   },
                 },
               }
             }}
      >
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
