'use client';

import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginPage() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await signIn('credentials', {
      ...form,
      redirect: false,
    });

    if (res?.error) {
      setError(res.error);
    } else {
      router.push('/feed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#121212] px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-[#1e1e1e] text-white w-full max-w-md p-8 rounded-2xl shadow-lg border border-[#333] space-y-5"
      >
        <h2 className="text-3xl font-bold text-center">🔐 Login</h2>

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-[#2a2a2a] text-white border border-gray-600 placeholder-gray-400 focus:outline-none focus:border-pink-500"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-[#2a2a2a] text-white border border-gray-600 placeholder-gray-400 focus:outline-none focus:border-pink-500"
          required
        />

        <button
          type="submit"
          className="w-full bg-pink-600 hover:bg-pink-700 text-white py-2 rounded-lg transition font-semibold"
        >
          🚀 Log In
        </button>

        <p className="text-center text-sm text-gray-400">
          Don&apos;t have an account?{' '}
          <Link href="/signup" className="text-pink-400 underline hover:text-pink-300">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
}