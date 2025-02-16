"use client";
import { CardDetalleProducto } from "@/app/ui/cards/CardDetalleProducto";
import { useFavoritosStore } from "@/store/useFavoritosStore";
import { useMemo } from "react";

const Favoritos = () => {
  const listaFavoritos = useFavoritosStore(
    (state) => state.state.listaFavoritos
  );

  const filtrarData = useMemo(() => {
    return listaFavoritos;
  }, [listaFavoritos]);
  return (
    <div>
      {filtrarData.map((item, index) => (
        <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-2">
          <CardDetalleProducto />
        </div>
      ))}
    </div>
  );
};

export default Favoritos;
