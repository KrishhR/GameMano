/* eslint-disable no-unused-vars */
'use client';

import React, {useEffect, useState} from 'react';
import {fetchAllProducts} from './services/productService';
import {Product} from './types';
import './styles/style.css';
import Banner from './components/Banner';
import TrendingProducts from './components/TrendingProducts';
import Sidebar from './components/Sidebar';
import {usePathname} from 'next/navigation';
import Advertisment from './components/Advertisment';

export default function HomePage() {
  const pathname = usePathname();
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState('');

  const slides = [
    'https://res.cloudinary.com/epiphanystudios/image/upload/v1474325161/Billboard_-_AnalyticsBanner_s0vsiv.jpg',
    'https://res.cloudinary.com/epiphanystudios/image/upload/v1474389520/Billboard_-_HipsterBanner_rzyv5r.jpg',
    'https://res.cloudinary.com/epiphanystudios/image/upload/v1474389522/Billboard_-_ProductsBanner_kfucs3.jpg',
  ];

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchAllProducts();
        setProducts(data.products);
      } catch (err) {
        setError('Failed to fetch products');
      }
    };

    getProducts();
  }, []);

  return (
    <div className="flex">
      {pathname === '/' ? <Sidebar /> : <></>}
      <div className="p-4 flex flex-col gap-8">
        <Banner slides={slides} />

        {/* <TrendingProducts products={products} /> */}
        <Advertisment
          gameDetails={{
            title: 'Evolution',
            desc: `Players assume the role of Deacon St. John, a former bounty hunter struggling to survive in
					a post-apocalyptic world filled with zombie-like creatures called Freaks. Though players
					are surrounded by death and danger on all sides, the world that they get to explore feels
					as though it's truly alive, which can encourage players to take risks when they probably shouldn't.`,
          }}
        />

        <Advertisment
          gameDetails={{
            title: 'Valorant',
            desc: `Players assume the role of Deacon St. John, a former bounty hunter struggling to survive in a post-apocalyptic world filled with zombie-like creatures called Freaks. Though players are surrounded by death and danger on all sides, the world that they get to explore feels as though it's truly alive, which can encourage players to take risks when they probably shouldn't.`,
          }}
        />
      </div>
    </div>
  );
}
