/* eslint-disable no-unused-vars */
'use client';

import React from 'react';
import './styles/style.css';
import Banner from './components/Banner';
import Sidebar from './components/Sidebar';
import {usePathname} from 'next/navigation';
import Advertisment from './components/Advertisment';

export default function HomePage() {
  const pathname = usePathname();

  // slides array for banner images
  const slides = [
    'https://res.cloudinary.com/epiphanystudios/image/upload/v1474325161/Billboard_-_AnalyticsBanner_s0vsiv.jpg',
    'https://res.cloudinary.com/epiphanystudios/image/upload/v1474389520/Billboard_-_HipsterBanner_rzyv5r.jpg',
    'https://res.cloudinary.com/epiphanystudios/image/upload/v1474389522/Billboard_-_ProductsBanner_kfucs3.jpg',
  ];

  return (
    <div className="flex">
      {/* sidebar */}
      {pathname === '/' ? <Sidebar /> : <></>}
      <div className="p-4 flex flex-col gap-8">
        {/* Banner Componant */}
        <Banner slides={slides} />

        {/* Advertisments */}
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
