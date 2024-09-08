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
    if (username != '' && password != '') {
      login(username, password);
    }
  };

  useEffect(() => {
    if (user) {
      const redirectURL = localStorage.getItem('redirectURL') || '/';
      router.push(redirectURL);
    }
  }, [user, router]);

  return (
    <div className="flex flex-col justify-center items-center item-x-6 p-6">
      <h1 className="text-white text-3xl">Login Page</h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto p-4 min-h-[65vh]"
      >
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="border p-2 w-full mb-2 outline-0"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="border p-2 w-full mb-2 outline-0"
          required
        />
        <Button
          type="submit"
          className="w-full text-white bg-orange-500 hover:bg-orange-400"
        >
          Login
        </Button>
      </form>
    </div>
  );
}
