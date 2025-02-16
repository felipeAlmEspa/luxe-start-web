"use client";
import { useMueble } from "@/app/service/muebles/useMueble";
import { Carousel } from "@/app/ui/Carousel";

const Home = () => {
  const { data } = useMueble();
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
    </div>
  );
};

export default Home;
