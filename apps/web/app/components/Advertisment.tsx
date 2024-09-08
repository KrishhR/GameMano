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
    <div
      className="h-screen flex items-center justify-end p-10 mb-5"
      style={{backgroundColor: 'rgba(0,0,0,0.5)'}}
    >
      <div className="max-w-4xl w-full p-10 bg-transparent text-white rounded-lg shadow-lg relative">
        <div className="absolute top-4 right-4 text-right">
          <div className="flex items-center justify-center">
            <span className="rounded-full h-2 w-2 flex bg-green-400 m-2"></span>
            <p className="text-white mb-1">40 of your friends are playing</p>
          </div>
          <div className="flex justify-end space-x-1">
            <StarFilledIcon className="bg-star" />
            <StarFilledIcon className="bg-star" />
            <StarFilledIcon className="bg-star" />
            <StarFilledIcon className="bg-star" />
            <StarFilledIcon className="bg-star" />
            <StarIcon className="bg-star" />
          </div>
        </div>

        <h1 className="text-6xl font-bold">{gameDetails.title}</h1>
        <div className="mt-2">
          <span className="text-sm bg-gray-800 text-gray-400 py-1 px-2 rounded-md">
            RELEASE DATE : 30TH DECEMBER
          </span>
        </div>

        <p className="mt-4 text-gray-400 text-lg">{gameDetails.desc}</p>

        <div className="flex items-start space-x-6 gap-10">
          <div className="mt-8 flex flex-col gap-4">
            <Button className="bg-orange-500 hover:bg-orange-600 text-lg px-6 py-3 w-32 rounded-full">
              Play Now
            </Button>
            <p className="text-gray-400 text-lg">
              Buy now for <span className="text-white">$40</span> only
            </p>
          </div>

          <div className="mt-10 flex items-center space-x-4">
            <p className="text-gray-400">Available on:</p>
            <div className="flex items-center space-x-2">
              <Monitor className="w-6 h-6 text-white" />
              <Apple className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advertisment;
