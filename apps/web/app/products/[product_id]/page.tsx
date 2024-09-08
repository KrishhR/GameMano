/* eslint-disable no-unused-vars */
'use client';

import React, {useEffect, useState} from 'react';
import ProtectedRoute from '../../hoc/ProtectedRoute';
import {fetchProductById} from '~/app/services/productService';
import {usePathname, useRouter} from 'next/navigation';
import {Product} from '~/app/types';
import Image from 'next/image';
import {Button} from '@repo/ui/components/ui/button';
import {CheckCircle, ChevronLeft} from 'lucide-react';
import {StarFilledIcon, StarIcon} from '@radix-ui/react-icons';
import '../../styles/style.css';
// import { Box, Heading, Text, Button, Image } from '';

const ProductPage = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState<boolean>(true); // State to manage loading
  const [product, setProduct] = useState<Product>({
    id: 0,
    title: '',
    price: 0,
    thumbnail: '',
    description: '',
    rating: 0,
  });

  // api calls
  useEffect(() => {
    const product_id = pathname.split('/')[2];
    const gProductById = async () => {
      // api call to get product details using ID
      try {
        const data = await fetchProductById(product_id + '');
        setProduct(data);
      } catch (err) {
        setError('Failed to fetch categories');
      }
    };

    Promise.all([gProductById()]).finally(() => {
      setLoading(false);
    });
  }, []);

  const ratings = (rating: number) => {
    return (
      <div className="flex space-x-1">
        {[...Array(5)].map((_, index) => (
          <span key={index}>
            {index < Math.round(+rating) ? (
              <StarFilledIcon className="bg-star" />
            ) : (
              <StarIcon className="bg-star" />
            )}
          </span>
        ))}
      </div>
    );
  };

  console.log(product, 'path');
  return (
    <ProtectedRoute>
      <div className="min-h-screen text-white p-6 flex flex-col items-center">
        {/* Back Button */}
        <div className="w-full max-w-4xl mb-6">
          <button
            className="flex items-center text-sm text-neutral-400 hover:text-neutral-100 transition"
            onClick={() => router.back()}
          >
            <ChevronLeft className="mr-2" />
          </button>
        </div>

        {/* Product Card */}
        <div
          className=" rounded-lg shadow-lg w-full max-w-4xl relative"
          style={{border: '1px solid #736E69'}}
        >
          <div className="p-8">
            {/* Release Date & Ratings */}

            <div className="absolute bg-gray-900 pl-4 px-24 rounded-50 custom-product-badge">
              <h3 className="text-neutral-400 text-sm">
                RELEASE DATE: 30TH DECEMBER
              </h3>
            </div>

            <div className="flex items-center mt-12 justify-between">
              <div className="flex mt-2">{ratings(product.rating)}</div>
            </div>

            {/* Product Name */}
            <h1 className="text-5xl font-bold mt-4">LEAGUE OF LEGENDS</h1>

            {/* CTA Button */}
            <div className="my-6">
              <button className="bg-orange-500 text-white text-lg font-semibold py-3 px-6 rounded-full hover:bg-orange-400 transition">
                Try For Free
              </button>
            </div>

            {/* Player Count */}
            <div className="flex items-center text-sm text-neutral-400 mt-4">
              <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
              <span>245k players already enrolled</span>
            </div>

            {/* Platforms */}
            <div className="flex mt-6 space-x-4">
              <div className="bg-neutral-700 p-2 rounded-lg flex items-center space-x-2">
                <span className="text-sm">Available on:</span>
                {/* Platform Icons */}
                <div className="flex space-x-2">
                  <div className="bg-white text-neutral-900 p-2 rounded-lg">
                    iOS
                  </div>
                  <div className="bg-white text-neutral-900 p-2 rounded-lg">
                    Windows
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="bg-neutral-900 p-8 rounded-b-lg">
            <p className="text-neutral-400 leading-relaxed">
              Wild Rift! Built from the ground up for mobile-first PvP, Wild
              Rift is a 5v5 multiplayer online battle arena (MOBA) game with
              exciting action where your skills, strategy, and combat senses are
              put to the test.
            </p>
            <p className="text-neutral-400 leading-relaxed mt-4">
              Enjoy fast-paced MOBA combat, real-time strategy, smooth controls,
              and diverse 5v5 gameplay. Team up with friends, lock in your
              champion, and play to win!
            </p>

            <h3 className="text-2xl font-bold mt-6">CHOOSE YOUR CHAMPION</h3>
            <p className="text-neutral-400 leading-relaxed mt-4">
              Whether you like to dive straight into the fray, support your
              teammates, or something in between, there's a spot for you on the
              Rift.
            </p>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default ProductPage;
