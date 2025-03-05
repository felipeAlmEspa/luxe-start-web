"use client";

import { Modal, ModalContent } from "@heroui/modal";
import { IProducto } from "../../../../ts/models/IProducto";
import ProductoInfo from "../cards/ProductoInfo";
import { Heart, ShoppingCart, X } from "lucide-react";
import { useActualizarProducto } from "@/app/service/productos/useActualizarProducto";
import { ShowCustomToast } from "@/app/ui/notification/ShowCustomToast";

interface PropsModalDetalleProducuto {
  producto: IProducto;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}
export const ModalDetalleProducuto: React.FC<PropsModalDetalleProducuto> = ({
  producto,
  isOpen,
  onOpen,
  onClose,
}) => {
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
        ShowCustomToast(
          "success",
          `Producto ${
            estado === true ? "agregado a la" : "eliminado de la"
          } lista correctamente`,
          3000
        );
      },
    });
  };
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpen} size="full" backdrop="blur">
      <ModalContent className="flex justify-center items-center gap-5">
        <ProductoInfo producto={producto} />
        <div className="flex justify-center items-center gap-5">
          <button
            className="px-4 py-2 bg-red-500 bg-opacity-20 text-white rounded-lg"
            onClick={onClose}
          >
            <X size={18} fill="white" />
          </button>
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
        </div>
        {/* <ModalBody className="flex justify-center items-center">
          
        </ModalBody>
        <ModalFooter>
          <Button onClick={() => setIsOpen(false)} color="danger">
            Cerrar
          </Button>
        </ModalFooter> */}
      </ModalContent>
    </Modal>
  );
};
