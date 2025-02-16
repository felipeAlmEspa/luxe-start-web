"use client";
import { useMueble } from "@/app/service/muebles/useMueble";
import { CardMueble } from "@/app/ui/cards/CardMueble";
import { Carousel } from "@/app/ui/Carousel";
import { Divider } from "@heroui/react";

const Home = () => {
  const { data } = useMueble();

  return (
    <div className="w-full h-[auto] ">
      <div className="flex justify-center  bg-[#f2f1f1] rounded-2xl">
        {data && (
          <Carousel
            data={data
              .filter((item) => typeof item.img === "string") // Filtra solo los que tienen `img` válida
              .map((item) => ({ img: item.img ?? "" }))}
          />
        )}
      </div>
      <div className="pt-3">
        <Divider />
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        {data &&
          data.map((item, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-2">
              <CardMueble key={index} mueble={item} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
