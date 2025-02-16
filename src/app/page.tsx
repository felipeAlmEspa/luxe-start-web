"use client";
import { useMueble } from "@/app/service/muebles/useMueble";
import { CardMueble } from "@/app/ui/cards/CardMueble";
import { Carousel } from "@/app/ui/Carousel";
import { FiltroMueble } from "@/app/ui/filtros/FiltroMueble";
import { Divider, Input } from "@heroui/react";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";

const Home = () => {
  const [filtroColores, setFiltroColores] = useState<string | null>(null);
  const [filtroCategoria, setFiltroCategoria] = useState<string | null>(null);
  const [filtroInput, setFiltroInput] = useState<string | null>(null);
  const { data, isLoading } = useMueble();

  const obtenerColores = useMemo(() => {
    if (data) {
      return data
        .filter((item) => item.color)
        .map((item) => ({
          clave: item.color!,
          valor: item.color!,
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
    return [];
  }, [data]);

  const obtenerCategorias = useMemo(() => {
    if (data) {
      return data
        .filter((item) => item.categoria)
        .map((item) => ({
          clave: item.categoria!,
          valor: item.categoria!,
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
    return [];
  }, [data]);

  const filtrarData = useMemo(() => {
    if (data) {
      let temp = data;

      if (filtroColores) {
        temp = temp.filter(
          (item) => item.color && item.color === filtroColores
        );
      }
      if (filtroCategoria) {
        temp = temp.filter(
          (item) => item.categoria && item.categoria === filtroCategoria
        );
      }
      if (filtroInput && filtroInput.length > 0) {
        const filtro = filtroInput.toUpperCase();
        temp = temp.filter(
          (item) =>
            (item.descripcion &&
              item.descripcion.toUpperCase().includes(filtro)) ||
            (item.color && item.color.toUpperCase().includes(filtro)) ||
            (item.categoria && item.categoria.toUpperCase().includes(filtro)) ||
            (item.etiqueta && item.etiqueta.toUpperCase().includes(filtro))
        );
      }

      return temp;
    } else {
      return [];
    }
  }, [data, filtroCategoria, filtroColores, filtroInput]);
  if (isLoading) {
    return <></>;
  } else {
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
        <nav className="flex flex-col sm:flex-row gap-4 bg-[#cacaca] p-3 items-center justify-center">
          <Input
            className="w-full sm:w-1/4"
            label="Buscar"
            labelPlacement="outside"
            placeholder="Ingresar término de búsqueda"
            startContent={
              <Search className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
            }
            onChange={(v) => setFiltroInput(v.target.value)}
            type="email"
          />
          <FiltroMueble
            data={obtenerCategorias}
            onSelect={setFiltroCategoria}
            valor={filtroCategoria}
            placeholder="Seleccionar una opción"
            borderColor="border-black"
            title="Filtrar por categoría"
          />
          <FiltroMueble
            data={obtenerColores}
            onSelect={setFiltroColores}
            valor={filtroColores}
            placeholder="Seleccionar una opción"
            borderColor="border-black"
            title="Filtrar por color"
          />
        </nav>

        <div className="flex flex-wrap justify-center gap-2">
          {filtrarData &&
            filtrarData.map((item, index) => (
              <div
                key={index}
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-2 min-w-[340px]"
              >
                <CardMueble key={index} mueble={item} />
              </div>
            ))}
        </div>
      </div>
    );
  }
};

export default Home;
