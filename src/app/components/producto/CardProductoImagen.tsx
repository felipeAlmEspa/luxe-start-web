import Image from "next/image";
import { IProducto } from "../../../../ts/models/IProducto";
import { EyeIcon, Heart, ShoppingCart } from "lucide-react";
import { useActualizarProducto } from "@/app/service/productos/useActualizarProducto";
import { isNil } from "lodash";
import { toast } from "sonner";
import { useState } from "react";
import { ModalImagen } from "../modals/ModalImagen";
import { useDisclosure } from "@heroui/react";
import { ModalDetalleProducuto } from "../modals/ModalDetalleProducuto";
interface PropsCardProductoImagen {
  producto: IProducto;
}
export const CardProductoImagen: React.FC<PropsCardProductoImagen> = ({
  producto,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [openModalImg, setOpenModalImg] = useState<boolean>(false);
  const { mutate: actualizarPro } = useActualizarProducto();
  const addFavorito = async () => {
    if (producto.favorito === true) {
      producto = { ...producto, favorito: false };
    } else {
      producto = { ...producto, favorito: true };
    }

    modificarProducto(producto, producto.favorito);
  };
  const addCarrito = async () => {
    if (producto.carrito === true) {
      producto = { ...producto, carrito: false };
    } else {
      producto = { ...producto, carrito: true };
    }

    modificarProducto(producto, producto.carrito);
  };
  const modificarProducto = (pro: IProducto, estado: boolean) => {
    actualizarPro(pro, {
      onSuccess: () => {
        toast.success(
          `Producto ${
            estado === true ? "agregado a la" : "eliminado de la"
          } lista correctamente`,
          {
            description: "Puedes revisar tu lista.",
          }
        );
      },
    });
  };

  return (
    <div className="w-full relative">
      {/* Imagen */}
      <Image
        key={producto.id}
        className="w-full flex-shrink-0 rounded-xl"
        src={!isNil(producto.img) ? producto.img : ""}
        alt="Next.js logo"
        width={200}
        height={200} // Controla la altura
        priority
        onClick={() => setOpenModalImg(!openModalImg)}
      />

      {/* Contenedor de botones */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
        <button
          className="px-4 py-2 bg-black bg-opacity-20 text-white rounded-lg"
          onClick={addFavorito}
        >
          {producto.favorito === true ? (
            <Heart size={18} fill="white" />
          ) : (
            <Heart size={18} />
          )}
        </button>
        <button
          className="px-4 py-2 bg-black bg-opacity-20 text-white rounded-lg"
          onClick={addCarrito}
        >
          {producto.carrito === true ? (
            <ShoppingCart size={18} fill="white" />
          ) : (
            <ShoppingCart size={18} />
          )}
        </button>
        <button
          onClick={onOpen}
          className="px-4 py-2 bg-black bg-opacity-20 text-white rounded-lg"
        >
          <EyeIcon size={18} />
        </button>
      </div>
      {openModalImg && (
        <ModalImagen
          img={producto.img ?? ""}
          isOpen={openModalImg}
          setIsOpen={() => setOpenModalImg(!openModalImg)}
        />
      )}

      {isOpen && (
        <ModalDetalleProducuto
          isOpen={isOpen}
          producto={producto}
          onOpen={onOpen}
          onClose={onClose}
        />
      )}
    </div>
  );
};
