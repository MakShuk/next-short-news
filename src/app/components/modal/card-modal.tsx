"use client";

import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

interface ModaCardProps {
  title: string;
  content: string[];
  isOpen: boolean;
  onOpenChange: () => void;
}

export default function CardModal({
  title,
  content,
  isOpen,
  onOpenChange,
}: ModaCardProps) {
  return (
    <>
      <Modal
        isOpen={isOpen}
        scrollBehavior="outside"
        placement="bottom-center"
        onOpenChange={onOpenChange}
        backdrop="blur"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
              <ModalBody>
                <ul>
                  {content.map((el, i) => {
                    return (
                      <li key={i} className="mb-2">
                        -{el}
                      </li>
                    );
                  })}
                </ul>
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
