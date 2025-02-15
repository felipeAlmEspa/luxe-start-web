"use client";

// components/Carousel.js
import Image from "next/image";
import { useState } from "react";

export const Carousel = () => {
  const slides = [
    "/next.svg",
    "/next.svg",
    "/next.svg",
    "/next.svg",
    "/next.svg",
    "/next.svg",
    "/next.svg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Slide container */}
      <div className="overflow-hidden rounded-2xl">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <Image
              key={index}
              className="w-full flex-shrink-0"
              src={slide}
              alt="Next.js logo"
              width={180}
              height={38}
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
        {slides.map((_, index) => (
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
