import { Modal, ModalContent, Button } from "@heroui/react";
import { X } from "lucide-react";
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
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      size="md"
      placement="center"
    >
      <ModalContent className="relative">
        <Image
          className="w-full flex-shrink-0"
          src={imageUrl}
          alt="Next.js logo"
          width={400}
          height={400}
          priority
        />
        <div className="flex absolute bottom-0 bg-transparent w-full grid place-items-center p-5">
          <Button
            className="w-1/3 bg-transparent w-11 h-11 p-5 border-1 rounded-full"
            onPress={onOpenChange}
          >
            <X size={24} color="white" />
          </Button>
        </div>
      </ModalContent>
    </Modal>
  );
};

// {(onClose) => (
//   <>
//     <ModalHeader className="flex flex-col gap-1"></ModalHeader>
//     <ModalBody>
//       <Zoom>
//         <Image
//           className="w-full flex-shrink-0"
//           src={imageUrl}
//           alt="Next.js logo"
//           width={400}
//           height={400} // Este valor controla la altura
//           priority
//         />
//       </Zoom>
//       {/* <Image
//         className="w-full flex-shrink-0"
//         src={imageUrl}
//         alt="Next.js logo"
//         width={400}
//         height={400} // Este valor controla la altura
//         priority
//       /> */}
//     </ModalBody>
//     <ModalFooter>
//       <Button color="danger" variant="light" onPress={onClose}>
//         Cerrar
//       </Button>
//     </ModalFooter>
//   </>
// )}
