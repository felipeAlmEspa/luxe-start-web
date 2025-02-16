import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@heroui/react";
import Image from "next/image";

interface ModalImagenProps {
  isOpen: boolean;
  onOpenChange: () => void;
  imageUrl: string;
}

export const ModalImagen: React.FC<ModalImagenProps> = ({
  isOpen,
  onOpenChange,
  imageUrl,
}) => {
  return (
    <>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="xl"
        placement="center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1"></ModalHeader>
              <ModalBody>
                <Image
                  className="w-full flex-shrink-0"
                  src={imageUrl}
                  alt="Next.js logo"
                  width={400}
                  height={400} // Este valor controla la altura
                  priority
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cerrar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
