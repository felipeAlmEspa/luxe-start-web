import Image from "next/image";
import { IProducto } from "../../../../ts/models/IProducto";
import { EyeIcon, Heart, ShoppingCart } from "lucide-react";
import { useActualizarProducto } from "@/app/service/productos/useActualizarProducto";
import { isNil } from "lodash";

interface PropsCardProductoImagen {
  producto: IProducto;
}
export const CardProductoImagen: React.FC<PropsCardProductoImagen> = ({
  producto,
}) => {
  const { mutate: actualizarPro } = useActualizarProducto({
    onSuccess: () => {
      console.log("Producto actualizado con éxito");
    },
  });
  const addFavorito = async () => {
    producto = { ...producto, favorito: true };
    actualizarPro(producto);
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
      />

      {/* Contenedor de botones */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
        <button
          className="px-4 py-2 bg-black bg-opacity-20 text-white rounded-lg"
          onClick={addFavorito}
        >
          <Heart size={18} />
        </button>
        <button className="px-4 py-2 bg-black bg-opacity-20 text-white rounded-lg">
          <ShoppingCart size={18} />
        </button>
        <button className="px-4 py-2 bg-black bg-opacity-20 text-white rounded-lg">
          <EyeIcon size={18} />
        </button>
      </div>
    </div>
  );
};
