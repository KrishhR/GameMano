'use client';

import './globals.css';
import {AuthProvider} from './context/AuthContext';
import Header from './components/Header';
import Footer from './components/Footer';
import {Prosto_One} from 'next/font/google';

const prostoOne = Prosto_One({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-prosto-one',
  weight: '400',
});

const RootLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <html lang="en" className={prostoOne.variable}>
      <body>
        <AuthProvider>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
};

export default RootLayout;
