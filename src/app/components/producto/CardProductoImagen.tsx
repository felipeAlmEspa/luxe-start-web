import Image from "next/image";
import { IProducto } from "../../../../ts/models/IProducto";
import { EyeIcon, Heart, ShoppingCart } from "lucide-react";
import { useActualizarProducto } from "@/app/service/productos/useActualizarProducto";
import { isNil } from "lodash";
import { toast } from "sonner";
import { useObtenerProductoById } from "@/app/service/productos/useObtenerProductoById";

interface PropsCardProductoImagen {
  producto: IProducto;
}
export const CardProductoImagen: React.FC<PropsCardProductoImagen> = ({
  producto,
}) => {
  const { data: productoDB } = useObtenerProductoById(producto.id!);
  const { mutate: actualizarPro } = useActualizarProducto();
  const addFavorito = async () => {
    if (isNil(productoDB)) {
      return;
    }

    if (productoDB.favorito === true) {
      producto = { ...producto, favorito: false };
    } else {
      producto = { ...producto, favorito: true };
    }

    actualizarPro(producto, {
      onSuccess: () => {
        toast("Event has been created", {
          description: "Sunday, December 03, 2023 at 9:00 AM",
          action: {
            label: "Undo",
            onClick: () => console.log("Undo"),
          },
        });
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
