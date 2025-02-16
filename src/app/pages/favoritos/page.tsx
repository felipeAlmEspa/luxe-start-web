"use client";
import { CardDetalleProducto } from "@/app/ui/cards/CardDetalleProducto";
import { FiltroMueble } from "@/app/ui/filtros/FiltroMueble";
import { useFavoritosStore } from "@/store/useFavoritosStore";
import { Divider, Input } from "@heroui/react";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";

const Favoritos = () => {
  const listaFavoritos = useFavoritosStore(
    (state) => state.state.listaFavoritos
  );
  const [filtroColores, setFiltroColores] = useState<string | null>(null);
  const [filtroCategoria, setFiltroCategoria] = useState<string | null>(null);
  const [filtroInput, setFiltroInput] = useState<string | null>(null);

  const obtenerColores = useMemo(() => {
    if (listaFavoritos) {
      return listaFavoritos
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
  }, [listaFavoritos]);

  const obtenerCategorias = useMemo(() => {
    if (listaFavoritos) {
      return listaFavoritos
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
  }, [listaFavoritos]);

  const filtrarData = useMemo(() => {
    if (listaFavoritos) {
      let temp = listaFavoritos;

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
  }, [filtroCategoria, filtroColores, filtroInput, listaFavoritos]);

  return (
    <div className="flex flex-wrap justify-center gap-1">
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

      <Divider />
      {filtrarData.map((item, index) => (
        <div key={index} className="w-full sm:w-1/2 p-2">
          <CardDetalleProducto mueble={item} />
        </div>
      ))}
    </div>
  );
};

export default Favoritos;
