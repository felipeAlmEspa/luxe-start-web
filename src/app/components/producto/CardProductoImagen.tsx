import Image from "next/image";
import { IProducto } from "../../../../ts/models/IProducto";
import { EyeIcon, Heart, ShoppingCart } from "lucide-react";

interface PropsCardProductoImagen {
  mueble: IProducto;
}
export const CardProductoImagen: React.FC<PropsCardProductoImagen> = ({
  mueble,
}) => {
  return (
    <div className="w-full relative">
      {/* Imagen */}
      <Image
        key={mueble.id}
        className="w-full flex-shrink-0 rounded-xl"
        src={mueble.img ? mueble.img : ""}
        alt="Next.js logo"
        width={200}
        height={200} // Controla la altura
        priority
      />

      {/* Contenedor de botones */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
        <button className="px-4 py-2 bg-black bg-opacity-20 text-white rounded-lg">
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
