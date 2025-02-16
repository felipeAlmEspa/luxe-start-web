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
import { LocalStorageManager } from "../../../../ts/local-storage/LocalStorageManager";
import { useFavoritosStore } from "@/store/useFavoritosStore";

interface CardMuebleProps {
  mueble: IMueble;
}
export const CardMueble: React.FC<CardMuebleProps> = ({ mueble }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { addFavorito } = useFavoritosStore();

  const verImagen = () => {
    onOpen();
  };
  const guardarFavorito = () => {
    LocalStorageManager.addMueble(mueble);
    addFavorito(mueble);
  };
  return (
    <>
      <Card className="w-[320px] max-w-[500px] min-w-[220px]">
        <CardHeader className="flex gap-3">
          <div className="flex flex-col">
            <p className="text-md">
              {mueble.titulo ? mueble.titulo : "Mueble Luxe"}
            </p>
            <p className="text-small text-default-500">
              {mueble.color ? mueble.color : "Mueble Luxe"}
            </p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <Image
            alt="heroui logo"
            width={320}
            height={220}
            className="w-full h-full object-cover"
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
            onPress={guardarFavorito}
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
