// packages/ui/Header.tsx
import React, {useState} from 'react';
import {Bell, ShoppingBag, Search, Menu} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@repo/ui/components/ui/dropdown-menu';
import Logo from '../assets/images/GQ.png';
import Image from 'next/image';
// import { usePathname } from 'next/navigation';

const Header: React.FC = () => {
  // const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header
      className="flex flex-col lg:flex-row items-center justify-between py-4 px-4 topbar-bg text-white sticky top-0 z-50"
      style={{backgroundColor: 'rgba(33,31,24,1)'}}
    >
      {/* Mobile Menu Toggle */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
        <div className="flex justify-between items-center">
          <Image src={Logo} alt="LOGO" width={50} height={50} />
          <div className="lg:hidden flex items-center">
            <button onClick={toggleMenu} className="text-white">
              <Menu />
            </button>
          </div>
        </div>

        {/* Left Side Links */}
        <div className="flex items-center justify-between w-full lg:w-auto pl-4">
          <ul
            className={`flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-3 text-sm font-medium ${menuOpen ? 'flex' : 'hidden'} lg:flex`}
          >
            <li className="list-none">
              <a
                href="/"
                className="hover:text-gray-400 transition-colors px-4 border-r py-2"
              >
                Home
              </a>
            </li>
            <li className="list-none">
              <a
                href="/products"
                className="hover:text-gray-400 transition-colors px-4 py-2 border-r"
              >
                Game Store
              </a>
            </li>
            <li className="list-none">
              <a
                href="javascript:void(0);"
                className="hover:text-gray-400 px-4 transition-colors"
              >
                Leaderboard
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Right Side Icons */}
      <div className="flex items-center space-x-1 mt-4 lg:mt-0">
        {/* Search Bar */}
        <div className="border-r px-4">
          <div className="flex items-center topbar-bg px-4 border-gray-400 border-2 py-2 rounded-full w-full max-w-md lg:w-96">
            <Search className="text-white" />
            <input
              type="text"
              placeholder="What are you looking for?"
              className="ml-3 w-full bg-transparent outline-none text-white placeholder-gray-400"
            />
          </div>
        </div>

        {/* Notification Bell with red dot */}
        <div className="border-r px-4">
          <DropdownMenu>
            <DropdownMenuTrigger className="outline-0">
              <div className="h-10 w-10 rounded-full border border-white flex items-center justify-center cursor-pointer">
                <div className="relative">
                  <Bell className="text-white" />
                  <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
                </div>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="bg-black text-white  p-3 border-0"
              style={{borderRadius: '10px'}}
            >
              <DropdownMenuLabel>Notifications(3)</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="px-4 py-2 cursor-pointer bg-hover-orange rounded-md">
                Sample Notification 1
              </DropdownMenuItem>
              <DropdownMenuItem className="px-4 py-2 cursor-pointer bg-hover-orange rounded-md">
                Sample Notification 2
              </DropdownMenuItem>
              <DropdownMenuItem className="px-4 py-2 cursor-pointer bg-hover-orange rounded-md">
                Sample Notification 3
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Shopping Bag */}
        <div className="border-r px-4">
          <div className="h-10 w-10 rounded-full border border-white flex items-center justify-center cursor-pointer">
            <ShoppingBag className="text-white" />
          </div>
        </div>

        {/* Profile Icon Placeholder */}
        <div className="px-4">
          <div className="h-10 w-10 rounded-full border border-white cursor-pointer"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
