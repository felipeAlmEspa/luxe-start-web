"use client";
import { useMueble } from "@/app/service/muebles/useMueble";
import { Carousel } from "@/app/ui/Carousel";

const Home = () => {
  const { data } = useMueble();
  console.log("data => ", data);
  return (
    <div className="w-full h-screen">
      {data && (
        <Carousel
          data={data
            .filter((item) => typeof item.img === "string") // Filtra solo los que tienen `img` válida
            .map((item) => ({ img: item.img ?? "" }))}
        />
      )}
    </div>
  );
};

export default Home;
