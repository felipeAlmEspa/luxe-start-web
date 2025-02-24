"use client";
import { Button } from "@/components/ui/button";
import { ChevronRight, Heart, ImageIcon, ShoppingCart } from "lucide-react";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { configApp } from "../../../ts/configApp";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
export const MyHeader = () => {
  const pathname = usePathname(); // Obtiene la ruta actual
  const router = useRouter(); // Permite cambiar de ruta

  const navegar = (ruta: string) => {
    router.push(ruta);
  };
  return (
    <div className="bg-principal fixed top-0 left-0 w-full h-[19vh] p-1 z-50 shadow-md">
      <div className="flex pb-1 pr-2 pl-2 flex-row w-full h-[50px] justify-between gap-1">
        <div>
          <Button className="w-10 h-10 rounded-full bg-white">
            <ImageIcon size={24} />
          </Button>
        </div>
        <div className="flex h-full pl-1 pr-1 bg-[#535355] rounded-2xl justify-center">
          <ToggleGroup
            type="single"
            value={pathname}
            onValueChange={(value) => value && navegar(value)}
          >
            <ToggleGroupItem
              value="/"
              aria-label="Ir a Inicio"
              className={pathname === "/" ? "bg-blue-500 text-white" : ""}
            >
              <small>Inicio</small>
            </ToggleGroupItem>
            <ToggleGroupItem
              value="/nosotros"
              aria-label="Ir a Nosotros"
              className={
                pathname === "/nosotros" ? "bg-blue-500 text-white" : ""
              }
            >
              <small>Nosotros</small>
            </ToggleGroupItem>
            <ToggleGroupItem
              value="/historia"
              aria-label="Ir a Historia"
              className={
                pathname === "/historia" ? "bg-blue-500 text-white" : ""
              }
            >
              <small>Historia</small>
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
        <div className="flex gap-2">
          <Button className="w-10 h-10 rounded-full" variant={"secondary"}>
            <Heart size={24} />
          </Button>
          <Button className="w-10 h-10 rounded-full bg-[#125ece]">
            <ShoppingCart size={24} color="white" />
          </Button>
        </div>
      </div>

      <div className="flex mt-1 w-full h-[10vh] bg-gradient-to-r from-[#125ece] to-[#97b1d8] rounded-3xl gap-2 items-center">
        <div className="w-[22%] sm:w-[25%] h-full flex items-center justify-center">
          <Image
            aria-hidden
            src="/imagenes/logo.png"
            alt="File icon"
            width={34}
            height={34}
          />
        </div>
        <div className="flex-1 pl-5 text-justify">
          <p>{configApp.name}</p>
        </div>
        <div className="w-[25%] sm:w-[12%] p-1 pr-2 flex justify-end">
          <Button className="bg-white w-auto p-1" size="icon">
            <small>Contactos</small>
            <ChevronRight />
          </Button>
        </div>
      </div>
    </div>
  );
};
