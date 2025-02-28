import { IProducto } from "../../../../ts/models/IProducto";
import Image from "next/image";
import { isNil } from "lodash";
import { Heart } from "lucide-react";
import { Button } from "@heroui/react";
import { useActualizarProducto } from "@/app/service/productos/useActualizarProducto";
import { useCallback } from "react";
import { toast } from "sonner";

interface PropsProductoInfo {
  producto: IProducto;
}

const ProductoInfo: React.FC<PropsProductoInfo> = ({ producto }) => {
  const { mutate: actualizar } = useActualizarProducto();

  const eliminarFavorito = useCallback(async () => {
    actualizar(
      { ...producto, favorito: false },
      {
        onSuccess: () => {
          toast.success("Producto eliminado de favoritos correctamente");
        },
      }
    );
  }, [actualizar, producto]);

  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-[#141927] dark:bg-gray-900 p-1">
      <div className="relative">
        <Image
          key={producto.id}
          className="w-full flex-shrink-0 rounded-xl"
          src={!isNil(producto.img) ? producto.img : ""}
          alt="Next.js logo"
          width={60}
          height={60}
          priority
        />
        {producto.favorito && (
          <div className="absolute top-2 right-2 bg-gray-500 bg-opacity-10 text-white text-xs px-2 py-1 rounded-lg">
            <div className="grid grid-cols-2 gap-0 w-auto place-items-center">
              <Heart size={10} fill="red" color="red" />
              <small>Favorito</small>
            </div>
          </div>
        )}
        {producto.favorito && (
          <div className="absolute bottom-2 right-2">
            <Button
              onPress={eliminarFavorito}
              className="w-11 h-11 p-0 bg-black bg-opacity-20 hover:bg-opacity-70 rounded-full flex items-center justify-center"
            >
              <Heart size={18} className="text-white" fill="white" />
            </Button>
          </div>
        )}
      </div>

      <div className="space-y-1 p-2">
        <h2 className="text-xl font-semibold text-white dark:text-white">
          {producto.titulo}
        </h2>
        <p className="text-gray-600 dark:text-gray-200 text-sm">
          {producto.descripcion}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-gray-100 dark:text-white">
            ${producto.precio && producto.precio.toFixed(2)}
          </span>
          <span
            className={`px-3 py-1 text-xs font-semibold rounded-full ${
              producto.stock && producto.stock > 0
                ? "bg-green-500 text-white"
                : "bg-red-500 text-white"
            }`}
          >
            {producto.stock && producto.stock > 0 ? "Disponible" : "Agotado"}
          </span>
        </div>

        <div className="text-xs text-gray-500 dark:text-gray-400">
          Dimensiones: {producto.alto} x {producto.ancho} x {producto.largo} cm
        </div>
        <div className="text-xs text-gray-500 dark:text-gray-400">
          Color: {producto.color}
        </div>
      </div>
    </div>
  );
};

export default ProductoInfo;
