import { useCarritoStore } from "@/store/useCarritoStore";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@heroui/react";

interface ModalImagenProps {
  isOpen: boolean;
  onOpenChange: () => void;
}

export const ModalCorreo: React.FC<ModalImagenProps> = ({
  isOpen,
  onOpenChange,
}) => {
  const listaCarrito = useCarritoStore((state) => state.state.listaCarrito);
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
              <ModalBody>{listaCarrito.length}</ModalBody>
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
