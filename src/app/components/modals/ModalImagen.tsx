"use client";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@heroui/modal";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface PropsModalImagen {
  img: string;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}
export const ModalImagen: React.FC<PropsModalImagen> = ({
  img,
  isOpen,
  setIsOpen,
}) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {/* <Button onClick={() => setIsOpen(true)} color="primary">
        Ver Imagen
      </Button> */}

      <Modal
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        size="full"
        backdrop="blur"
      >
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="text-white">
                Imagen en Pantalla Completa
              </ModalHeader>
              <ModalBody className="flex justify-center items-center">
                <Image
                  src={img}
                  alt="Imagen en pantalla completa"
                  width={600}
                  height={500}
                  className="flex-1 max-h-[380px] sm:max-h-[500px] max-w-full"
                />
              </ModalBody>
              <ModalFooter>
                <Button onClick={() => setIsOpen(false)} color="danger">
                  Cerrar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};
