"use client";
import { useMueble } from "@/app/service/muebles/useMueble";
import { CardMueble } from "@/app/ui/cards/CardMueble";
import { Carousel } from "@/app/ui/Carousel";
import { Divider } from "@heroui/react";

const Home = () => {
  const { data } = useMueble();

  const renderItemCard = () => {
    if (data) {
      return data.map((item, index) => (
        <CardMueble key={index} mueble={item} />
      ));
    } else {
      return <></>;
    }
  };

  return (
    <div className="w-full h-screen ">
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
      <div>{data && renderItemCard()}</div>
    </div>
  );
};

export default Home;
