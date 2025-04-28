"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/ui/components/select";
import { CardProductoImagen } from "./components/producto/CardProductoImagen";
import { useEffect, useState } from "react";
import { useProductos } from "./service/productos/useProductos";
import { listaColores } from "../../ts/Colores";
import { listaCategoriasMuebles } from "../../ts/CategoriaMuebles";
import { SelectSection } from "@heroui/react";

const Home = () => {
  const { data } = useProductos();
  const [itemsToShow, setItemsToShow] = useState(2);

  useEffect(() => {
    const updateItemsToShow = () => {
      const width = window.innerWidth;
      setItemsToShow(width >= 1024 ? 4 : width >= 768 ? 3 : 2);
    };

    updateItemsToShow();
    window.addEventListener("resize", updateItemsToShow);
    return () => window.removeEventListener("resize", updateItemsToShow);
  }, []);

  return (
    <div className="flex flex-col w-screen">
      <div className="flex pl-1 w-full justify-center items-center gap-2">
        {/* Filtro por Categoría */}
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Categoría" />
          </SelectTrigger>
          <SelectContent className="bg-white">
            <SelectGroup className="text-black max-h-[350px]">
              <SelectSection>
                <SelectItem value="TODOS">TODOS</SelectItem>
              </SelectSection>
              {listaCategoriasMuebles.map((item, index) => (
                <SelectItem key={index} value={item}>
                  {item}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>

        {/* Filtro por Color */}
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Color" />
          </SelectTrigger>
          <SelectContent className="bg-white">
            <SelectGroup className="text-black max-h-[350px]">
              {listaColores.map((item, index) => (
                <SelectItem key={item + index} value={item}>
                  {item}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      {/* Productos Filtrados */}
      <div className="grid w-full p-1 gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pt-2">
        {data?.slice(0, itemsToShow).map((item) => (
          <CardProductoImagen key={item.id} producto={item} />
        ))}
      </div>

      {/* Producto Destacado */}
      {data && data[17] && (
        <div className="flex w-full grid place-items-center pt-2 pb-2">
          <div className="flex w-full md:w-[400px] max-h-[60vh] justify-center items-center">
            <CardProductoImagen producto={data[17]} />
          </div>
        </div>
      )}

      {/* Todos los Productos */}
      <div className="grid w-full h-[60vh] p-1 gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data?.map((item) => (
          <CardProductoImagen key={item.id} producto={item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
