import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { IProducto } from "../../../../ts/models/IProducto";
import { obtenerProductoByIdDB } from "../index-db/indexDB";
export const useObtenerProductoById = (
  id: number, // Aceptamos el id como parámetro
  queryOptions?: UseQueryOptions<
    IProducto | null,
    Error,
    IProducto | null,
    ["producto", number]
  > // Modificamos la queryKey para incluir el id
) => {
  const getProductoPorId = async () => {
    return await obtenerProductoByIdDB(id); // Usamos la función para obtener el producto por id
  };

  return useQuery({
    queryKey: ["producto", id], // La queryKey ahora incluye el id
    queryFn: getProductoPorId,
    ...queryOptions,
  });
};
