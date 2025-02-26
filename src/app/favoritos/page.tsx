"use client";
import { isNil } from "lodash";
import { useProductos } from "../service/productos/useProductos";
import ProductoInfo from "../components/cards/ProductoInfo";
import { useMemo } from "react";

const Favoritos = () => {
  const { data: listaProductos } = useProductos();

  const proFavoritos = useMemo(() => {
    if (isNil(listaProductos)) return [];
    return listaProductos.filter((item) => item.favorito === true);
  }, [listaProductos]);
  return (
    <div>
      <div className="grid w-full p-1 gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-2">
        {proFavoritos.map((item) => (
          <ProductoInfo key={item.id} producto={item} checked />
        ))}
      </div>
    </div>
  );
};

export default Favoritos;
