import React, { useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { ModalImagen } from "./modals/Modalmagen";
import { useDisclosure } from "@heroui/react";
interface CarouselProps {
  data: { img: string }[];
}
export const EmblaCarousel: React.FC<CarouselProps> = ({ data }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [image, setImage] = useState<string | null>(null);
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 2000 }),
  ]);

  const verImagen = (img: string) => {
    setImage(img);
    onOpen();
  };

  return (
    <>
      <div
        className="embla max-h-[30vh] w-full sm:-ml-[480px] max-w-lg border"
        ref={emblaRef}
      >
        <div className="embla__container max-h-[30vh]">
          {data.map((item) => (
            <div
              key={item.img}
              className="embla__slide flex h-[30vh] w-[100%] sm:w-[50vh]"
              onClick={() => verImagen(item.img)}
            >
              <Image
                key={item.img}
                className="w-full max-h-100"
                src={item.img}
                alt="Next.js logo"
                width={200}
                height={200} // Este valor controla la altura
                priority
              />
            </div>
          ))}
        </div>
      </div>

      {isOpen && image && (
        <ModalImagen
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          imageUrl={image}
        />
      )}
    </>
  );
};
