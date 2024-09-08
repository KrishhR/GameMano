'use client';

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import {useRouter} from 'next/navigation';

type AuthContextType = {
  user: string | null;
  login: (username: string, password: string) => void;
  register: (username: string, password: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({children}: {children: ReactNode}) => {
  const [user, setUser] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem('username');
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const login = (username: string, password: string) => {
    setUser(username);
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
  };

  const register = (username: string, password: string) => {
    const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
    const newUser = {username, password};
    localStorage.setItem('users', JSON.stringify([...existingUsers, newUser]));
    setUser(username);
    router.push('/');
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    router.push('/login');
  };

  return (
    <AuthContext.Provider value={{user, login, register, logout}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
