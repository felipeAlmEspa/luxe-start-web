"use client";
import { Button } from "@/components/ui/button";
import {
  ArrowBigRight,
  ChevronRight,
  Heart,
  ImageIcon,
  ShoppingCart,
} from "lucide-react";
export const MyHeader = () => {
  return (
    <div className="w-full h-auto p-1">
      <div className="flex flex-row w-full h-50 justify-between">
        <div>
          <Button className="w-10 h-10 rounded-full bg-white">
            <ImageIcon size={24} />
          </Button>
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
      <div className="p-1">
        <div className="flex flex-row w-full h-[20vh] bg-[#125ece] rounded-3xl justify-between items-center">
          <div className="flex w-7/8">test</div>
          <div className="p-1">
            <Button variant="outline" size="icon">
              <ChevronRight />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
