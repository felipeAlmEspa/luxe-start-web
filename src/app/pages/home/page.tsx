"use client";
import { useMueble } from "@/app/service/muebles/useMueble";
import { CardMueble } from "@/app/ui/cards/CardMueble";
import { Carousel } from "@/app/ui/Carousel";
import { FiltroMueble } from "@/app/ui/filtros/FiltroMueble";
import { Divider } from "@heroui/react";
import { useMemo, useState } from "react";

const Home = () => {
  const [filtroColores, setFiltroColores] = useState<string | null>(null);
  const { data } = useMueble();

  const obtenerColores = useMemo(() => {
    if (data) {
      return data
        .filter((item) => item.color) // Filtra solo los colores no nulos
        .map((item) => ({
          clave: item.color!, // Asegura que item.color nunca sea null (usando el operador de aserción no-null)
          valor: item.color!, // Asegura que item.color nunca sea null
        }))
        .filter(
          (value, index, self) =>
            index ===
            self.findIndex(
              (t) => t.clave === value.clave // Filtra los colores duplicados
            )
        )
        .filter((item) => item.clave && item.valor); // Filtra si clave o valor son nulos o vacíos
    }
    return []; // Si no hay datos, retorna un array vacío
  }, [data]);

  return (
    <div className="w-full h-[auto] ">
      <div className="flex justify-center  bg-[#f2f1f1] rounded-2xl">
        {data && (
          <Carousel
            data={data
              .filter((item) => typeof item.img === "string") // Filtra solo los que tienen `img` válida
              .map((item) => ({ img: item.img ?? "" }))}
          />
        )}
      </div>
      <div className="pt-3">
        <Divider />
      </div>
      <nav className="flex flex-row gap-4 bg-[#cacaca] p-3 items-center justify-center">
        <FiltroMueble
          data={obtenerColores}
          onSelect={setFiltroColores}
          valor={filtroColores}
          placeholder="Filtrar por color"
          borderColor="border-black"
        />
        <FiltroMueble
          data={obtenerColores}
          onSelect={setFiltroColores}
          valor={filtroColores}
          placeholder="Filtrar por color"
          borderColor="border-black"
        />
      </nav>

      <div className="flex flex-wrap justify-center gap-10">
        {data &&
          data.map((item, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-2">
              <CardMueble key={index} mueble={item} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
