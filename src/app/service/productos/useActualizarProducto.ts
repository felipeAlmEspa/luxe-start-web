import {
  useMutation,
  UseMutationOptions,
  useQueryClient,
} from "@tanstack/react-query";
import { IProducto } from "../../../../ts/models/IProducto";
import { actualizarProducto, obtenerProductos } from "../index-db/indexDB";

export const useActualizarProducto = (
  mutationOptions: UseMutationOptions<IProducto, Error, IProducto, unknown>
) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: actualizarProducto,
    onError: (err) => {
      console.log("err => ", err);
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: obtenerProductos,
      });
    },
    ...mutationOptions,
  });
};
