import {Twitter, Facebook, Instagram} from 'lucide-react';

export default function Footer() {
  return (
    <footer
      className=" text-white bottom-0 z-50"
      style={{backgroundColor: '#13100A'}}
    >
      <div className=" py-4 px-6 flex flex-col gap-6 md:flex flex-row justify-between items-center border-t border-gray-700">
        {/* Links */}
        <div className="flex flex-col md:flex-row gap-6">
          <a href="#" className="text-sm font-light hover:underline">
            Privacy Notice
          </a>
          <a href="#" className="text-sm font-light hover:underline">
            Terms of Service
          </a>
          <a href="#" className="text-sm font-light hover:underline">
            Cookie Policy
          </a>
          <a href="#" className="text-sm font-light hover:underline">
            Company Information
          </a>
          <a href="#" className="text-sm font-light hover:underline">
            Cookie Preferences
          </a>
        </div>
      </div>

      <div className=" py-4 px-6 flex flex-col gap-6 md:flex flex-row justify-between items-center border-t border-gray-700">
        {/* Copyright */}
        <div className="mt-4 md:mt-0">
          <p className="text-sm text-gray-400 text-center md:text-left font-light">
            Copyright © GameQuest, Inc. All rights reserved
          </p>
        </div>

        {/* Social Media Icons */}
        <div className="mt-4 md:mt-0 flex gap-6">
          <a href="#" className="text-white hover:text-gray-400">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            <Facebook className="w-5 h-5" />
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            <Instagram className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
