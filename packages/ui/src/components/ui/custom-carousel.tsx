/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react';
import {Product} from '../../../../../apps/web/app/types/product.type';

interface ObjectI {
  [key: string]: string;
}

interface CarouselProps {
  slides: string[] | Product[];
  slideStructure: (slide: any, index: number) => React.ReactNode;
  interval?: number;
  containerClassName?: string;
  // slideClassName?: string;
  dotClassName?: string;
  activeDotClassName?: string;
  customStyle?: ObjectI;
}

const Carousel: React.FC<CarouselProps> = ({
  slides,
  slideStructure,
  interval = 3000,
  containerClassName = 'relative w-full',
  dotClassName = 'w-3 h-3 rounded-full transition-colors',
  activeDotClassName = 'bg-yellow-300',
  customStyle = {},
}) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1,
      );
    }, interval);

    return () => clearInterval(slideInterval);
  }, [slides.length, interval]);

  return (
    <div className={containerClassName} style={customStyle}>
      {/* Slides */}
      <div className="relative w-full overflow-hidden">
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{transform: `translateX(-${currentSlide * 100}%)`}}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`flex-shrink-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {slideStructure(slide, index)}
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => goToSlide(index)}
            className={`${dotClassName} ${
              index === currentSlide ? activeDotClassName : 'bg-gray-300'
            }`}
            style={{
              backgroundColor: `${
                currentSlide === index ? '#FDF3BC' : 'white'
              }`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
