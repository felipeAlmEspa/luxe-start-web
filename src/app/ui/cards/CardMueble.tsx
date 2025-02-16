import { IMueble } from "../../../../ts/models/IMueble";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Image,
  useDisclosure,
  Button,
} from "@heroui/react";
import { ModalImagen } from "../modals/Modalmagen";
import { Heart, ReceiptText, ShoppingCart } from "lucide-react";

interface CardMuebleProps {
  mueble: IMueble;
}
export const CardMueble: React.FC<CardMuebleProps> = ({ mueble }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const verImagen = () => {
    onOpen();
  };
  return (
    <>
      <Card className="max-w-[500px] w-[330px]">
        <CardHeader className="flex gap-3">
          <div className="flex flex-col">
            <p className="text-md">
              {mueble.titulo ? mueble.titulo : "Mueble Luxe"}
            </p>
            <p className="text-small text-default-500">
              {mueble.etiqueta ? mueble.etiqueta : "Mueble Luxe"}
            </p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <Image
            alt="heroui logo"
            width={500}
            height={220}
            radius="sm"
            src={mueble.img ?? ""}
            onClick={() => verImagen()}
          />
          <p>{mueble.descripcion ? mueble.descripcion : "Sin descripción"}</p>
        </CardBody>
        <Divider />
        <CardFooter className="flex flex-wrap justify-center gap-4">
          <Button
            className="bg-transparent text-black border-1 border-black"
            color="primary"
          >
            <Heart size={16} color="red" />
          </Button>
          <Button
            className="bg-transparent text-black border-1 border-black"
            color="primary"
          >
            <ShoppingCart size={16} />
          </Button>
          <Button
            className="bg-transparent text-black border-1 border-black"
            color="primary"
          >
            <ReceiptText size={16} color="gray" />
          </Button>
        </CardFooter>
      </Card>
      {isOpen && mueble.img && (
        <ModalImagen
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          imageUrl={mueble.img}
        />
      )}
    </>
  );
};
