"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useMueble } from "./service/muebles/useMueble";
import { CardProductoImagen } from "./components/producto/CardProductoImagen";
import { useEffect, useState } from "react";
const Home = () => {
  const { data } = useMueble();
  const [itemsToShow, setItemsToShow] = useState(2); // Inicia con 2 columnas

  useEffect(() => {
    const updateItemsToShow = () => {
      if (window.innerWidth >= 1024) {
        setItemsToShow(4); // lg:grid-cols-4
      } else if (window.innerWidth >= 768) {
        setItemsToShow(3); // md:grid-cols-3
      } else {
        setItemsToShow(2); // grid-cols-2
      }
    };

    updateItemsToShow();
    window.addEventListener("resize", updateItemsToShow);

    return () => window.removeEventListener("resize", updateItemsToShow);
  }, []);
  return (
    <div className="flex flex-col w-screen">
      <div className="flex pl-1 w-full justify-center items-center gap-2">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Categoría" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Filtrar Categoría</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Color" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Filtrar Color</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="grid w-full p-1 gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pt-2">
        {data?.slice(0, itemsToShow).map((item) => (
          <CardProductoImagen key={item.id} mueble={item} />
        ))}
      </div>
      <div className="flex w-full grid place-items-center pt-2 pb-2">
        <div className="flex w-full md:w-[400px] max-h-[60vh] justify-center items-center">
          {data && data[17] && <CardProductoImagen mueble={data[17]} />}
        </div>
      </div>
      <div className="grid w-full h-[60vh] p-1 gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data &&
          data.map((item) => (
            <CardProductoImagen key={item.id} mueble={item} />
          ))}
      </div>
    </div>
  );
};
export default Home;
