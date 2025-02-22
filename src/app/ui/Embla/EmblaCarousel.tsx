import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
  data: string[];
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options, data } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {data.map((item) => (
            <div
              className="embla__slide border border-2 border-gray-200"
              key={item}
            >
              <div className="embla__slide__number">
                <Image
                  key={item}
                  className="w-full flex-shrink-0"
                  src={item}
                  alt="Next.js logo"
                  width={200}
                  height={200} // Este valor controla la altura
                  priority
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls bg-red-500 w-full justify-center items-center ">
        <div className="flex justify-between items-center w-[90vh] bg-blue-500">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
