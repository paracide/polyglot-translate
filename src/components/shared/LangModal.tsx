'use client'
import React, {ReactNode} from "react";
import {Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure} from "@nextui-org/modal";
import {Button} from "@nextui-org/button";


type Props = {
  title: string;
  children: ReactNode;
};
export default function OlButton(props: Readonly<Props>) {
  const {title, children} = props;
  const {isOpen, onOpen, onClose} = useDisclosure();

  return (
    <>
      <Button size="sm" radius="full" color="primary"
              className="w-20 bg-gradient-to-tr from-pink-500 to-yellow-500 text-white" onPress={onOpen}
              variant="flat">{title}</Button>
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
