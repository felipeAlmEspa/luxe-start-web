"use client";

// components/Carousel.js
import Image from "next/image";
import { useState } from "react";

interface CarouselProps {
  data: { img: string }[];
}

export const Carousel: React.FC<CarouselProps> = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log("data => ", data);
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Slide container */}
      <div className="overflow-hidden rounded-2xl">
        <div
          className="flex transition-transform duration-500 h-[380px]"
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
              width={280}
              height={540} // Este valor controla la altura
              priority
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
        {data.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-black" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};
