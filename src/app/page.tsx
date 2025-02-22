"use client";
import { useMueble } from "@/app/service/muebles/useMueble";
import { FiltroMueble } from "@/app/ui/filtros/FiltroMueble";
import { Input, Spinner } from "@heroui/react";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import EmblaCarousel from "./ui/Embla/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";

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

  const OPTIONS: EmblaOptionsType = { loop: true };
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  if (isLoading) {
    return (
      <div className="flex grid place-items-center w-full h-[300px]">
        <Spinner
          classNames={{ label: "text-foreground mt-4" }}
          label="Cargando..."
        />
      </div>
    );
  } else {
    return (
      <div className="fixed top-[178px] sm:top-[86px] left-0 w-full min-h-scrren bg-white items-center justify-center">
        <div className="flex h-[50vh] sm:h-[51vh] justify-center rounded-2xl">
          {data && (
            <EmblaCarousel
              slides={SLIDES}
              options={OPTIONS}
              data={data.map((item) => {
                return item.img ? item.img : "";
              })}
            />
          )}
        </div>
        <div className="w-full h-50px grid place-items-center border-none">
          <nav className="flex bg-white w-[90%] border-t-1 border-b-1 border-gray-300 flex-col sm:flex-row gap-4 p-1 items-center justify-center">
            <Input
              className="w-full sm:w-1/4 h-[30px]"
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
        </div>
        <div className="w-full min-h-[70vh] border border-2 border-white"></div>
      </div>
    );
  }
};

export default Home;
