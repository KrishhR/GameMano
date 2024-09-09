import React from 'react';
import {Monitor, Apple} from 'lucide-react';
import {Button} from '@repo/ui/components/ui/button';
import {StarFilledIcon, StarIcon} from '@radix-ui/react-icons';

interface gameDetailsI {
  title: string;
  desc: string;
}

const Advertisment: React.FC<{gameDetails: gameDetailsI}> = ({gameDetails}) => {
  return (
    <div className=" flex items-center justify-end p-4 md:p-10 bg-overshadow">
      <div className="w-full max-w-2xl lg:max-w-4xl p-6 md:p-10 bg-transparent text-white rounded-lg shadow-lg relative">
        {/* Ratings and Online Friends */}
        <div className="absolute top-4 right-4 text-right space-y-2">
          <div className="flex items-center justify-center">
            <span className="rounded-full h-2 w-2 flex bg-green-400 m-2"></span>
            <p className="text-white mb-1 text-xs md:text-sm">
              40 of your friends are playing
            </p>
          </div>
          <div className="flex justify-end space-x-1">
            {[...Array(5)].map((_, i) => (
              <StarFilledIcon
                key={i}
                className="text-yellow-400 w-4 h-4 md:w-5 md:h-5"
              />
            ))}
            <StarIcon className="text-yellow-400 w-4 h-4 md:w-5 md:h-5" />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-6xl font-bold">{gameDetails.title}</h1>

        {/* Release Date */}
        <div className="mt-2">
          <span className="text-xs md:text-sm bg-gray-800 text-gray-400 py-1 px-2 rounded-md">
            RELEASE DATE: 30TH DECEMBER
          </span>
        </div>

        {/* Description */}
        <p className="mt-4 text-gray-400 text-sm md:text-lg">
          {gameDetails.desc}
        </p>

        {/* Buttons and Platform Info */}
        <div className="flex flex-col md:flex-row md:items-start space-y-6 md:space-y-0 md:space-x-10">
          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col gap-4">
            <Button className="bg-orange-500 hover:bg-orange-600 text-lg px-6 py-3 rounded-full w-full md:w-32">
              Play Now
            </Button>
            <p className="text-gray-400 text-sm md:text-lg">
              Buy now for <span className="text-white">$40</span> only
            </p>
          </div>

          {/* Platform Availability */}
          <div className="mt-4 md:mt-10 flex flex-col md:flex-row items-center space-x-0 md:space-x-4">
            <p className="text-gray-400 text-sm md:text-lg mb-2 md:mb-0">
              Available on:
            </p>
            <div className="flex space-x-2">
              <Monitor className="w-5 h-5 md:w-6 md:h-6 text-white" />
              <Apple className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advertisment;
