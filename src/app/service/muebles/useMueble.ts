"use client";

import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { mueblesApi } from "@/app/api/mueblesApi";
import { IProducto } from "../../../../ts/models/IProducto";
export const useMueble = (
  queryOptions?: UseQueryOptions<
    IProducto[],
    AxiosError,
    IProducto[],
    ["todos"]
  >
) => {
  const getListaMuebles = async () => {
    return mueblesApi.getMuebles();
  };

  return useQuery({
    queryKey: ["todos"],
    queryFn: getListaMuebles,
    ...queryOptions,
  });
};
