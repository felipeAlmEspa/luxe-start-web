import Image from "next/image";
import { IMueble } from "../../../../ts/models/IMueble";

interface PropsCardProductoImagen {
  mueble: IMueble;
}
export const CardProductoImagen: React.FC<PropsCardProductoImagen> = ({
  mueble,
}) => {
  return (
    <div className="w-full">
      <Image
        key={mueble.id}
        className="w-full flex-shrink-0 rounded-xl"
        src={mueble.img ? mueble.img : ""}
        alt="Next.js logo"
        width={200}
        height={200} // Este valor controla la altura
        priority
        // onClick={() => verImagen(slide.img)}
      />
    </div>
  );
};
