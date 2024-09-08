/* eslint-disable @next/next/no-img-element */
import Carousel from '@repo/ui/components/ui/custom-carousel';
import React from 'react';

interface BannerI {
  slides: string[];
}

const Banner = (bannerProps: BannerI) => {
  const {slides} = bannerProps;

  const slideStructure = (slide: string, index: number) => {
    return (
      <img
        src={slide}
        alt={`Slide ${index}`}
        className="w-full h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[30rem] object-cover rounded-lg shadow-lg"
      />
    );
  };

  return (
    <div className="w-full">
      <Carousel
        slides={slides}
        slideStructure={slideStructure}
        interval={5000}
        containerClassName="relative w-full overflow-hidden"
      />
    </div>
  );
};

export default Banner;
