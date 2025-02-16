"use client";

// components/Carousel.js
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { ModalImagen } from "./modals/Modalmagen";
import { useDisclosure } from "@heroui/react";

interface CarouselProps {
  data: { img: string }[];
}

export const Carousel: React.FC<CarouselProps> = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleIndicators, setVisibleIndicators] = useState([0, 1, 2, 3, 4]);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [image, setImage] = useState<string | null>(null);
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
  }, [data.length]);

  // UseEffect para mover el carrusel automáticamente cada 5 segundos
  useEffect(() => {
    const interval = setInterval(handleNext, 5000); // 5000 ms = 5 segundos

    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(interval);
  }, [handleNext]);
  // Función para manejar la visualización de los indicadores (mostrando solo 5 a la vez)
  useEffect(() => {
    const totalIndicators = data.length;
    const indicatorsPerPage = 5;
    const startIndex =
      Math.floor(currentIndex / indicatorsPerPage) * indicatorsPerPage;

    setVisibleIndicators(
      Array.from(
        { length: indicatorsPerPage },
        (_, index) => startIndex + index
      ).filter((index) => index < totalIndicators)
    );
  }, [currentIndex, data.length]);

  const verImagen = (img: string) => {
    setImage(img);
    onOpen();
  };

  return (
    <div className="relative  w-[400px] justify-center">
      {/* Slide container */}
      <div className="overflow-hidden rounded-2xl w-full">
        <div
          className="flex transition-transform duration-500 h-[400px]"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {data.map((slide, index) => (
            <Image
              key={index}
              className="w-full flex-shrink-0"
              src={slide.img}
              alt="Next.js logo"
              width={200}
              height={200} // Este valor controla la altura
              priority
              onClick={() => verImagen(slide.img)}
            />
          ))}
        </div>
      </div>

      {/* Buttons */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black"
      >
        ◀
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black"
      >
        ▶
      </button>

      {/* Indicators */}
      <div className="flex justify-center mt-4 space-x-2">
        {visibleIndicators.map((index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-black" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
      {isOpen && image && (
        <ModalImagen
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          imageUrl={image}
        />
      )}
    </div>
  );
};
