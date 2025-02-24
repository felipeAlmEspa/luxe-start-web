import { IProducto } from "../../../../ts/models/IProducto";
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
import { useFavoritosStore } from "@/store/useFavoritosStore";
import { useMueble } from "@/app/service/muebles/useMueble";
import { useCallback, useMemo } from "react";
import { useCarritoStore } from "@/store/useCarritoStore";

interface CardMuebleProps {
  mueble: IProducto;
}
export const CardMueble: React.FC<CardMuebleProps> = ({ mueble }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { data } = useMueble();
  const favoritos = useFavoritosStore((state) => state.state.listaFavoritos);
  const { addFavorito } = useFavoritosStore();
  const { removeFavorito } = useFavoritosStore();
  const carritoData = useCarritoStore((state) => state.state.listaCarrito);
  const { addCarrito } = useCarritoStore();
  const { removeCarrito } = useCarritoStore();

  const verImagen = () => {
    onOpen();
  };
  const guardarFavorito = useCallback(() => {
    const temp = favoritos.find((item) => item.id === mueble.id);
    if (temp) {
      removeFavorito(mueble.id);
    } else {
      addFavorito(mueble);
    }
  }, [addFavorito, favoritos, mueble, removeFavorito]);

  const guardarCarrito = useCallback(() => {
    const temp = carritoData.find((item) => item.id === mueble.id);
    if (temp) {
      removeCarrito(mueble.id);
    } else {
      addCarrito(mueble);
    }
  }, [addCarrito, carritoData, mueble, removeCarrito]);

  const muebleSeleccionadoFavorito = useMemo(() => {
    const temp = favoritos.find((item) => item.id === mueble.id);
    if (temp && data) {
      const tempDos = data.find((item) => item.id === temp.id);
      if (tempDos) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }, [data, favoritos, mueble.id]);

  const muebleSeleccionadoCarrito = useMemo(() => {
    const temp = carritoData.find((item) => item.id === mueble.id);
    if (temp && data) {
      const tempDos = data.find((item) => item.id === temp.id);
      if (tempDos) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }, [carritoData, data, mueble.id]);

  return (
    <>
      <Card className="shadow-xl w-[320px] max-w-[500px] min-w-[220px] border-1 border-gray-300">
        <CardHeader className="flex gap-3">
          <div className="flex flex-col">
            <small className="text-xs">
              {mueble.titulo ? mueble.titulo : "Mueble Luxe"}
            </small>
            <small className="text-xss text-default-500">
              {mueble.color ? mueble.color : "Mueble Luxe"}
            </small>
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
            {muebleSeleccionadoFavorito === true ? (
              <Heart fill="#d36666" size={16} color="#d36666" />
            ) : (
              <Heart size={16} color="red" />
            )}
          </Button>
          <Button
            onPress={guardarCarrito}
            className="bg-transparent text-black border-1 border-black"
            color="primary"
          >
            {muebleSeleccionadoCarrito === true ? (
              <ShoppingCart fill="#0a65c1" size={16} color="#0a65c1" />
            ) : (
              <ShoppingCart size={16} color="#484848" />
            )}
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
