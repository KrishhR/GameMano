'use client';

import {useAuth} from '../context/AuthContext';
import {useRouter} from 'next/navigation';
import React, {useEffect, useState} from 'react';

type ProtectedRouteProps = {
  children: React.ReactNode;
};

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({children}) => {
  const {user} = useAuth();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (user === null) {
      // Only redirect if user is explicitly null, not just falsy
      localStorage.setItem('redirectURL', window.location.pathname);
      router.push('/login');
    } else {
      setIsLoading(false);
    }
  }, [user, router]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
