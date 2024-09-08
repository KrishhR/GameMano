/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react';
import {Product} from '../types';
import ProductCard from './ProductCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

interface TrendingProductsI {
  products: Product[];
}

const TrendingProducts = (props: TrendingProductsI) => {
  const {products} = props;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 slides at a time on larger screens
    slidesToScroll: 1,
    arrows: false, // Disable side arrows
    responsive: [
      {
        breakpoint: 1024, // Below 1024px width
        settings: {
          slidesToShow: 2, // Show 2 slides
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768, // Below 768px width
        settings: {
          slidesToShow: 1, // Show 1 slide on mobile
          slidesToScroll: 1,
        },
      },
    ],
  };

  const getRandomProducts = (products: Product[], count: number) => {
    const shuffled = products.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const selectedProducts = getRandomProducts(products, 5);

  return (
    <div className="container  p-4 w-screen">
      {' '}
      {/* Container is now centered and responsive */}
      <Slider {...settings}>
        {selectedProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            customClass="bg-light-yellow rounded-10"
          />
        ))}
      </Slider>
    </div>

    // <div>
    // 		{/* <Carousel
    //             slides={products}
    //             slideStructure={slideStructure}
    //             interval={5000}
    //             containerClassName="relative w-full"
    //         // slideClassName="w-full h-full object-cover rounded-lg shadow-lg"
    //         /> */}

    // 		{/* <Carousel className="w-screen" plugins={[
    //             Autoplay({
    //                 delay: 2000,
    //             }),
    //         ]}
    //         >
    //             <CarouselContent className="-ml-1">
    //                 {products.map((product, index) => (
    //                     <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
    //                         <div className="p-1">
    //                             <ProductCard key={product.id} product={product} />
    //                         </div>
    //                     </CarouselItem>
    //                 ))}
    //             </CarouselContent> */}
    // 		{/* <CarouselPrevious />
    //   <CarouselNext /> */}
    // 		{/* </Carousel> */}
    // </div>
  );
};

export default TrendingProducts;
