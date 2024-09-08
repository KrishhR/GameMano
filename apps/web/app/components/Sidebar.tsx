import {useState} from 'react';
import {
  Home,
  Mail,
  Store,
  CreditCard,
  Trophy,
  Settings,
  LogOut,
} from 'lucide-react';
import {useAuth} from '../context/AuthContext';
import Image from 'next/image';
import BgLogo from '../assets/images/GameQuest.png';

const Sidebar: React.FC = () => {
  const {logout} = useAuth();
  const [isOpen, setIsOpen] = useState(false); // Track sidebar state (open/close)

  const handleMouseEnter = () => setIsOpen(true); // Open on hover
  const handleMouseLeave = () => setIsOpen(false); // Close when not hovered

  const logoutUser = () => {
    const isUserExist = !!localStorage.getItem('user');
    if (isUserExist) logout();
  };

  return (
    <>
      {/* Side bar with only icons */}
      <aside
        className={`relative bg-transparent h-auto text-white transition-all duration-300 ease-in-out w-auto`}
        onMouseEnter={handleMouseEnter}
        style={{
          borderRight: '1px solid #736E69',
          borderBottom: '1px solid #736E69',
        }}
      >
        <div className="flex flex-col h-full">
          {/* SIDEBAR MENU */}
          <div className="flex flex-col h-full py-4">
            <ul
              className="space-y-4 mt-6 pb-6 transition-all duration-300 ease-in-out px-4"
              style={{borderBottom: '1px solid rgba(255, 255, 255, 0.3)'}}
            >
              <li>
                <a
                  className="p-4 flex items-center hover:text-gray-400 transition-colors"
                  href="/"
                >
                  <Home />
                </a>
              </li>
              <li>
                <a
                  className="p-4 flex items-center hover:text-gray-400 transition-colors"
                  href="javascript:void(0);"
                >
                  <div className="relative">
                    <Mail />
                    <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
                  </div>
                </a>
              </li>
              <li>
                <a
                  className="p-4 flex items-center hover:text-gray-400 transition-colors"
                  href="/products"
                >
                  <Store />
                </a>
              </li>
              <li>
                <a
                  className="p-4 flex items-center hover:text-gray-400 transition-colors"
                  href="javascript:void(0);"
                >
                  <CreditCard />
                </a>
              </li>
              <li>
                <a
                  className="p-4 flex items-center hover:text-gray-400 transition-colors"
                  href="javascript:void(0);"
                >
                  <Trophy />
                </a>
              </li>
            </ul>

            <ul className="space-y-4 mt-6 pb-6 transition-all duration-300 ease-in-out px-4">
              <li>
                <a
                  className="p-4 flex items-center hover:text-gray-400 transition-colors"
                  href="javascript:void(0);"
                >
                  <Settings />
                </a>
              </li>
              <li>
                <a
                  className="p-4 flex items-center hover:text-gray-400 transition-colors"
                  onClick={() => logoutUser()}
                >
                  <LogOut />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </aside>

      {/* Side bar whose initial width will be 0px, and on hover expands. */}
      <div
        onMouseLeave={handleMouseLeave}
        className={`fixed top-0 left-0 z-60 h-full transition-all duration-500 ease-in-out ${isOpen ? 'w-64' : 'w-0'}  text-white overflow-hidden z-50`}
        style={{backgroundColor: 'rgba(61, 53, 42, 0.95)'}}
      >
        <div className="flex flex-col h-full">
          {/* Logo Section */}
          <div className="p-4 mt-4">
            <Image
              src={BgLogo}
              alt="LOGO"
              width={isOpen ? '150' : '50'}
              height={isOpen ? '150' : '50'}
              className="mx-auto"
            />
          </div>

          {/* Menu Items */}
          <div className="flex flex-col h-full py-4">
            <ul
              className="space-y-4 mt-6 pb-6 px-4 transition-all duration-300 ease-in-out"
              style={{borderBottom: '1px solid rgba(255, 255, 255, 0.3)'}}
            >
              <li>
                <a
                  className="p-4 flex items-center hover:text-gray-400 transition-colors"
                  href="/"
                >
                  <Home className="w-6 h-6" />
                  <span
                    className={`transition-all duration-300 ease-in-out ml-4 ${isOpen ? 'block' : 'hidden'}`}
                  >
                    Home
                  </span>
                </a>
              </li>
              <li>
                <a
                  className="p-4 flex items-center hover:text-gray-400 transition-colors"
                  href="javascript:void(0);"
                >
                  <div className="relative">
                    <Mail className="w-6 h-6" />
                    <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
                  </div>
                  <span
                    className={`transition-all duration-300 ease-in-out ml-4 ${isOpen ? 'block' : 'hidden'}`}
                  >
                    Messages
                  </span>
                </a>
              </li>
              <li>
                <a
                  className="p-4 flex items-center hover:text-gray-400 transition-colors"
                  href="/products"
                >
                  <Store className="w-6 h-6" />
                  <span
                    className={`transition-all duration-300 ease-in-out ml-4 ${isOpen ? 'block' : 'hidden'}`}
                  >
                    Game Store
                  </span>
                </a>
              </li>
              <li>
                <a
                  className="p-4 flex items-center hover:text-gray-400 transition-colors"
                  href="javascript:void(0);"
                >
                  <CreditCard className="w-6 h-6" />
                  <span
                    className={`transition-all duration-300 ease-in-out ml-4 ${isOpen ? 'block' : 'hidden'}`}
                  >
                    Payments
                  </span>
                </a>
              </li>
              <li>
                <a
                  className="p-4 flex items-center hover:text-gray-400 transition-colors"
                  href="javascript:void(0);"
                >
                  <Trophy className="w-6 h-6" />
                  <span
                    className={`transition-all duration-300 ease-in-out ml-4 ${isOpen ? 'block' : 'hidden'}`}
                  >
                    Leaderboard
                  </span>
                </a>
              </li>
            </ul>

            <ul className="space-y-4 mt-6 pb-6 px-4">
              <li>
                <a
                  className="p-4 flex items-center hover:text-gray-400 transition-colors"
                  href="javascript:void(0);"
                >
                  <Settings className="w-6 h-6" />
                  <span
                    className={`transition-all duration-300 ease-in-out ml-4 ${isOpen ? 'block' : 'hidden'}`}
                  >
                    Settings
                  </span>
                </a>
              </li>
              <li>
                <a
                  className="p-4 flex items-center hover:text-gray-400 transition-colors cursor-pointer"
                  onClick={logoutUser}
                >
                  <LogOut className="w-6 h-6" />
                  <span
                    className={`transition-all duration-300 ease-in-out ml-4 ${isOpen ? 'block' : 'hidden'}`}
                  >
                    Logout
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
