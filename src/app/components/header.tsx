"use client";
import { Button } from "@/components/ui/button";
import { ChevronRight, Heart, ImageIcon, ShoppingCart } from "lucide-react";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { configApp } from "../../../ts/configApp";
export const MyHeader = () => {
  return (
    <div className="bg-principal fixed top-0 left-0 w-full h-[19vh] p-1 z-50 shadow-md">
      <div className="flex pb-1 pr-2 pl-2 flex-row w-full h-[50px] justify-between gap-1">
        <div>
          <Button className="w-10 h-10 rounded-full bg-white">
            <ImageIcon size={24} />
          </Button>
        </div>
        <div className="flex h-full pl-1 pr-1 bg-[#535355] rounded-md justify-center">
          <ToggleGroup type="single">
            <ToggleGroupItem value="bold" aria-label="Toggle bold">
              <small>Inicio</small>
            </ToggleGroupItem>
            <ToggleGroupItem value="italic" aria-label="Toggle italic">
              <small>Nosotros</small>
            </ToggleGroupItem>
            <ToggleGroupItem value="underline" aria-label="Toggle underline">
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

      <div className="flex mt-1 w-full h-[10vh] bg-gradient-to-r from-[#125ece] to-[#97b1d8] rounded-3xl justify-between items-center">
        <div className="flex pl-5 w-[80%] text-justify">
          <p>{configApp.name}</p>
        </div>
        <div className="p-1 pr-2 w-[18%]">
          <Button className="bg-white" size="icon">
            <ChevronRight />
          </Button>
        </div>
      </div>
    </div>
  );
};
