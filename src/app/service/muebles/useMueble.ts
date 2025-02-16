"use client";

import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { IMueble } from "../../../../ts/models/IMueble";
import { mueblesApi } from "@/app/api/mueblesApi";
export const useMueble = (
  queryOptions?: UseQueryOptions<IMueble[], AxiosError, IMueble[], ["todos"]>
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
