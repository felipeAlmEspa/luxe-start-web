import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { IProducto } from "../../../../ts/models/IProducto";
import { obtenerProductos } from "../index-db/indexDB";

export const useProductos = (
  queryOptions?: UseQueryOptions<IProducto[], Error, IProducto[], ["todos"]>
) => {
  const getLitaProductos = async () => {
    return await obtenerProductos();
  };

  return useQuery({
    queryKey: ["todos"],
    queryFn: getLitaProductos,
    ...queryOptions,
  });
};
