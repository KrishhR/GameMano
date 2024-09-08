'use client';

import {useEffect, useState} from 'react';
import {useAuth} from '../context/AuthContext';
import {Button} from '@repo/ui/components/ui/button';
import {useRouter} from 'next/navigation';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {user, login} = useAuth();
  const router = useRouter();

  const handleSubmit = () => {
    login(username, password);
  };

  useEffect(() => {
    if (user) {
      const redirectURL = localStorage.getItem('redirectURL') || '/';
      router.push(redirectURL);
    }
  }, [user, router]);

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 min-h-[75vh]">
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        className="border p-2 w-full mb-2"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="border p-2 w-full mb-2"
      />
      <Button type="submit" className="w-full">
        Login
      </Button>
    </form>
  );
}
