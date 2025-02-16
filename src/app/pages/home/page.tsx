"use client";
import { useMueble } from "@/app/service/muebles/useMueble";
import { Carousel } from "@/app/ui/Carousel";

const Home = () => {
  const { data } = useMueble();
  console.log("data => ", data);
  return (
    <div className="w-full h-screen">
      <Carousel />
    </div>
  );
};

export default Home;
