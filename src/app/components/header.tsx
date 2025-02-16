"use client";
import { Heart, ShoppingCart } from "lucide-react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  SharedSelection,
  Divider,
} from "@heroui/react";
import { useCallback, useState } from "react";
import { useFavoritosStore } from "@/store/useFavoritosStore";
import { useRouter } from "next/navigation";

export const MyHeader = () => {
  const [selectedKeys, setSelectedKeys] = useState("Mis muebles");
  const router = useRouter();
  const listaFavoritos = useFavoritosStore(
    (state) => state.state.listaFavoritos
  );

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
    <div className="fixe top-0 left-0 w-full z-50 bg-white shadow-md">
      <nav className="bg-white">
        <div className="flex justify-between pl-3 pr-3">
          <div className="text-black grid grid-cols-3 gap-2">
            <small>Whatsapp: 099999999</small>
            <small>tuemailaqui@gmail.com</small>
          </div>
          <div className="text-black">
            <small>Cuneca - Ecuador</small>
          </div>
        </div>
        <Divider />
        <div className="w-full grid">
          <div className="flex pb-2 pt-2 flex-col sm:flex-row">
            <div className="w-full sm:w-1/3 text-center"></div>
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
                      <div className="flex justify-between">
                        <small>Favoritos</small>
                        <Heart />
                      </div>
                    </DropdownItem>
                    <DropdownItem key="Carrito">
                      <div className="flex justify-between">
                        <small>Carrito</small>
                        <ShoppingCart />
                      </div>
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
              <div className="hidden sm:flex">
                <Button
                  className="bg-transparent text-black"
                  color="primary"
                  onPress={() => router.push("/pages/favoritos")}
                >
                  <small>Favoritos {listaFavoritos.length}</small>
                  <Heart />
                </Button>
                <Button className="bg-transparent text-black" color="primary">
                  <small>Carrito</small>
                  <ShoppingCart />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
