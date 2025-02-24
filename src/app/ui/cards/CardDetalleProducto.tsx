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
import { useFavoritosStore } from "@/store/useFavoritosStore";
import { useCallback, useMemo } from "react";
import { useCarritoStore } from "@/store/useCarritoStore";

interface CardDetalleProductoProps {
  mueble: IProducto;
  pagina: string;
}
export const CardDetalleProducto: React.FC<CardDetalleProductoProps> = ({
  mueble,
  pagina,
}) => {
  const addCarrito = useCarritoStore((state) => state.addCarrito);
  const removeFavorito = useFavoritosStore((state) => state.removeFavorito);
  const removeCarrito = useCarritoStore((state) => state.removeCarrito);
  const carritoData = useCarritoStore((state) => state.state.listaCarrito);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const verImagen = () => {
    onOpen();
  };

  const calcularDescuento = useMemo(() => {
    if (!mueble.precio) return 0;
    if (!mueble.descuento) return mueble.precio;

    return (mueble.precio * mueble.descuento) / 100;
  }, [mueble.descuento, mueble.precio]);

  const guardarCarrito = useCallback(() => {
    const temp = carritoData.find((item) => item.id === mueble.id);
    if (!temp) {
      addCarrito(mueble);
    }
  }, [addCarrito, carritoData, mueble]);

  const muebleSeleccionadoCarrito = useMemo(() => {
    const temp = carritoData.find((item) => item.id === mueble.id);
    if (temp) {
      return true;
    } else {
      return false;
    }
  }, [carritoData, mueble.id]);

  return (
    <div className="min-w-1/2">
      <Card className="shadow-xl">
        <CardHeader className="flex gap-3 bg-gray-300 max-h-[40px]">
          <div className="flex flex-col">
            <small className="text-xs">
              {mueble.titulo ? mueble.titulo : "Mueble Luxe"}
            </small>
            <small className="text-xs text-default-500">
              {mueble.color ? mueble.color : "Mueble Luxe"}
            </small>
          </div>
        </CardHeader>
        <Divider />
        <CardBody className="flex sm:flex-row flex-col w-full gap-2">
          <div className="sm:w-[auto] w-full">
            <Image
              alt="heroui logo"
              width={300}
              height={220}
              radius="sm"
              src={mueble.img ?? ""}
              onClick={() => verImagen()}
            />
          </div>
          <div className="sm:w-2/4 w-full">
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
            <div className="flex items-center gap-4 p-2 bg-gray-100 border shadow-md rounded-lg">
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
        <CardFooter className="flex flex-wrap justify-center gap-1 bg-gray-300 h-14">
          {pagina === "FAVORITOS" && (
            <Button
              className="bg-transparent text-black border-1 border-black max-w-[150px] max-h-10 -top-3 -mb-5"
              color="primary"
              onPress={() => removeFavorito(mueble.id)}
            >
              <small className="text-[8px]">ELIMINAR DE FAVORITOS</small>
            </Button>
          )}
          {(pagina === "FAVORITOS" || pagina === "DETALLE") &&
            muebleSeleccionadoCarrito == false && (
              <Button
                className="bg-transparent text-black border-1 border-black max-w-[150px] max-h-10 -top-3 -mb-5"
                color="primary"
                onPress={guardarCarrito}
              >
                <small className="text-[8px]">AGREGAR AL CARRITO</small>
              </Button>
            )}
          {pagina === "CARRITO" && (
            <Button
              className="bg-transparent text-black border-1 border-black max-h-10 -top-3 -mb-5"
              color="primary"
              onPress={() => removeCarrito(mueble.id)}
            >
              <small className="text-[8px]">ELIMINAR DEL CARRITO</small>
            </Button>
          )}
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
