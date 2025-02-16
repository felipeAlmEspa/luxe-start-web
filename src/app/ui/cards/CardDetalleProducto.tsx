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
import { useFavoritosStore } from "@/store/useFavoritosStore";
import { useMemo } from "react";

interface CardDetalleProductoProps {
  mueble: IMueble;
}
export const CardDetalleProducto: React.FC<CardDetalleProductoProps> = ({
  mueble,
}) => {
  const removeFavorito = useFavoritosStore((state) => state.removeFavorito);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const verImagen = () => {
    onOpen();
  };

  const calcularDescuento = useMemo(() => {
    if (!mueble.precio) return 0;
    if (!mueble.descuento) return mueble.precio;

    return (mueble.precio * mueble.descuento) / 100;
  }, [mueble.descuento, mueble.precio]);

  return (
    <div className="min-w-1/2">
      <Card>
        <CardHeader className="flex gap-3 bg-gray-200">
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
        <CardBody className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          <div className="w-full grid place-items-center">
            <Image
              alt="heroui logo"
              width={300}
              height={220}
              radius="sm"
              src={mueble.img ?? ""}
              onClick={() => verImagen()}
            />
          </div>
          <div className="w-full">
            <div>
              <strong>
                <small>Categoria: </small>
              </strong>
              <small>
                {mueble.categoria ? mueble.categoria : "Sin información"}
              </small>
            </div>
            <div>
              <strong>
                <small>Largo: </small>
              </strong>
              <small>{mueble.largo ? mueble.largo : "Sin información"}</small>
            </div>
            <div>
              <strong>
                <small>Ancho: </small>
              </strong>
              <small>{mueble.ancho ? mueble.ancho : "Sin información"}</small>
            </div>
            <div>
              <strong>
                <small>Alto: </small>
              </strong>
              <small>{mueble.alto ? mueble.alto : "Sin información"}</small>
            </div>
            <div>
              <strong>
                <small>Color: </small>
              </strong>
              <small>{mueble.color ? mueble.color : "Sin información"}</small>
            </div>
            <div>
              <strong>
                <small>Descripción: </small>
              </strong>
              <small>
                {mueble.descripcion ? mueble.descripcion : "Sin información"}
              </small>
            </div>
            <div className="flex items-center gap-4 p-4 border shadow-md rounded-lg">
              <span className="text-sm font-semibold text-gray-700">
                Precio: {mueble.precio ? mueble.precio : 0}
              </span>
              <span className="text-sm text-gray-700 font-bold">
                Descuento: {mueble.descuento ? mueble.descuento : 0}%
              </span>
              <span className="text-sm font-semibold text-gray-900">
                Final: {calcularDescuento}
              </span>
            </div>
          </div>
        </CardBody>
        <Divider />
        <CardFooter className="flex flex-wrap justify-center gap-4 bg-gray-200">
          <Button
            className="bg-transparent text-black border-1 border-black"
            color="primary"
            onPress={() => removeFavorito(mueble.id)}
          >
            <small>ELIMINAR DE FAVORITOS</small>
          </Button>
          <Button
            className="bg-transparent text-black border-1 border-black"
            color="primary"
          >
            <small>AGREGAR AL CARRITO</small>
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
    </div>
  );
};
