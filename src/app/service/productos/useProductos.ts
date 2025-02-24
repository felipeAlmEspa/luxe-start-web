import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { IProducto } from "../../../../ts/models/IProducto";
import { obtenerProductos } from "../index-db/indexDB";
import { productosKey } from "./productosKey";

export const useProductos = (
  queryOptions?: UseQueryOptions<
    IProducto[],
    Error,
    IProducto[],
    ReturnType<(typeof productosKey)["listado"]>
  >
) => {
  const getLitaProductos = async () => {
    return await obtenerProductos();
  };

  return useQuery({
    queryKey: ["producto", "listado"],
    queryFn: getLitaProductos,
    ...queryOptions,
  });
};
