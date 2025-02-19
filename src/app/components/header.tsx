"use client";
import { Heart, ShoppingCart } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  SharedSelection,
  Divider,
} from "@heroui/react";
import { useCallback, useEffect, useState } from "react";
import { useFavoritosStore } from "@/store/useFavoritosStore";
import { useRouter } from "next/navigation";
import { useCarritoStore } from "@/store/useCarritoStore";
import { configApp } from "../../../ts/configApp";

export const MyHeader = () => {
  const [selectedKeys, setSelectedKeys] = useState("Mis muebles");
  const router = useRouter();
  const cargaInicial = useFavoritosStore((state) => state.cargaInicial);
  const cargaInicialCarrito = useCarritoStore(
    (state) => state.cargaInicialCarrito
  );

  useEffect(() => {
    cargaInicial();
    cargaInicialCarrito();
  }, [cargaInicial, cargaInicialCarrito]);

  const listaFavoritos = useFavoritosStore(
    (state) => state.state.listaFavoritos
  );

  const listaCarrito = useCarritoStore((state) => state.state.listaCarrito);
  const selectedValue = useCallback((keys: SharedSelection) => {
    if (keys instanceof Set) {
      const selectedKey = [...keys][0];
      setSelectedKeys(selectedKey.toString());
    }
  }, []);

  const navegar = useCallback(() => {
    router.push("/pages/favoritos");
  }, [router]);

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <nav className="bg-white">
        <div className="flex justify-between pl-3 pr-3">
          <div className="text-black grid grid-cols-3 gap-2">
            <small>Whatsapp: {configApp.telefono}</small>
            <small>{configApp.email}</small>
          </div>
          <div className="text-black">
            <small>{configApp.ciudad}</small>
          </div>
        </div>
        <Divider />
        <div className="w-full grid">
          <div className="flex pb-2 pt-2 flex-col sm:flex-row">
            <div className="flex flex-row w-full sm:w-1/3 sm:text-left items-center">
              <div className="">
                <Button
                  className="bg-transparent text-black"
                  color="primary"
                  onPress={() => router.push("/")}
                >
                  <FontAwesomeIcon
                    icon={faHome}
                    className="text-gray-500 text-2xl"
                  />
                </Button>
                <Button
                  className="bg-transparent text-black"
                  color="primary"
                  onPress={() => router.push("/")}
                >
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className="text-blue-800 text-2xl"
                  />
                </Button>
                <Button
                  className="bg-transparent text-black"
                  color="primary"
                  onPress={() => router.push("/")}
                >
                  <FontAwesomeIcon
                    icon={faTwitter}
                    className="text-blue-400 text-2xl"
                  />
                </Button>
                <Button
                  className="bg-transparent text-black"
                  color="primary"
                  onPress={() => router.push("/")}
                >
                  <FontAwesomeIcon
                    icon={faWhatsapp}
                    className="text-green-400 text-2xl"
                  />
                </Button>
              </div>
            </div>
            <div className="w-full sm:w-1/3 text-center">
              <h1 className="text-xl sm:text-3xl font-serif">MUEBLERÍA LUXE</h1>
            </div>
            <div className="w-full sm:w-1/3 flex justify-center sm:justify-end">
              <div className="sm:hidden">
                <Dropdown>
                  <DropdownTrigger>
                    <Button variant="bordered">{selectedKeys}</Button>
                  </DropdownTrigger>
                  <DropdownMenu
                    disallowEmptySelection
                    aria-label="Single selection example"
                    selectedKeys={selectedKeys}
                    selectionMode="single"
                    variant="flat"
                    onSelectionChange={selectedValue}
                  >
                    <DropdownItem key="Favoritos" onPress={navegar}>
                      <div className="flex justify-between relative">
                        <small>Favoritos</small>
                        <Heart className="w-7 h-7" />
                        {listaFavoritos.length > 0 && (
                          <span className="absolute text-center -top-1 -right-2 bg-primary text-white text-xs font-bold px-1 py-1 rounded-full w-6 h-6">
                            {listaFavoritos.length}
                          </span>
                        )}
                      </div>
                    </DropdownItem>
                    <DropdownItem
                      key="Carrito"
                      onPress={() => router.push("/pages/carrito")}
                    >
                      <div className="flex justify-between relative">
                        <small>Carrito</small>
                        <ShoppingCart className="w-7 h-7" />
                        {listaCarrito.length > 0 && (
                          <span className="absolute text-center -top-1 -right-2 bg-primary text-white text-xs font-bold px-1 py-1 rounded-full w-6 h-6">
                            {listaCarrito.length}
                          </span>
                        )}
                      </div>
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
              <div className="hidden sm:flex">
                <Button
                  className="bg-transparent text-black relative"
                  color="primary"
                  onPress={() => router.push("/pages/favoritos")}
                >
                  <small>Favoritos</small>
                  <Heart className="w-7 h-7" />
                  {listaFavoritos.length > 0 && (
                    <span className="absolute top-1 right-2 bg-primary text-white text-xs font-bold px-1 py-1 rounded-full w-6 h-6">
                      {listaFavoritos.length}
                    </span>
                  )}
                </Button>

                <Button
                  className="bg-transparent text-black relative"
                  color="primary"
                  onPress={() => router.push("/pages/carrito")}
                >
                  <small>Carrito</small>
                  <ShoppingCart className="w-7 h-7" />
                  {listaCarrito.length > 0 && (
                    <span className="absolute top-1 right-2 bg-primary text-white text-xs font-bold px-1 py-1 rounded-full w-6 h-6">
                      {listaCarrito.length}
                    </span>
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
