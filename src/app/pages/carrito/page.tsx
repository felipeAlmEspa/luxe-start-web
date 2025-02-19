"use client";
import { CardDetalleProducto } from "@/app/ui/cards/CardDetalleProducto";
import { FiltroMueble } from "@/app/ui/filtros/FiltroMueble";
import { ModalCorreo } from "@/app/ui/modals/ModalCorreo";
import { useCarritoStore } from "@/store/useCarritoStore";
import { Button, Divider, Input, useDisclosure } from "@heroui/react";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";

const Carrito = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const listaCarrito = useCarritoStore((state) => state.state.listaCarrito);
  const [filtroColores, setFiltroColores] = useState<string | null>(null);
  const [filtroCategoria, setFiltroCategoria] = useState<string | null>(null);
  const [filtroInput, setFiltroInput] = useState<string | null>(null);

  const obtenerColores = useMemo(() => {
    if (listaCarrito) {
      return listaCarrito
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
  }, [listaCarrito]);

  const obtenerCategorias = useMemo(() => {
    if (listaCarrito) {
      return listaCarrito
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
  }, [listaCarrito]);

  const filtrarData = useMemo(() => {
    if (listaCarrito) {
      let temp = listaCarrito;

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
  }, [filtroCategoria, filtroColores, filtroInput, listaCarrito]);

  return (
    <div className="flex flex-wrap justify-center gap-1">
      <nav className="flex flex-col sm:flex-row gap-2 w-full bg-[#cacaca] p-3 items-center justify-center">
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
        <div className="pt-0 sm:pt-5 h-full grid place-items-center">
          <Button color="primary" onPress={onOpen}>
            Solicitar todo
          </Button>
        </div>
      </nav>

      <Divider />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
        {filtrarData.map((item, index) => (
          <CardDetalleProducto key={index} mueble={item} pagina="CARRITO" />
        ))}
      </div>
      {isOpen && <ModalCorreo isOpen={isOpen} onOpenChange={onOpenChange} />}
    </div>
  );
};

export default Carrito;
