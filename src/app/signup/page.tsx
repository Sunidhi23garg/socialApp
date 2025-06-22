'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Link from 'next/link';

export default function SignupPage() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('/api/signup', form);
      router.push('/login');
    } catch (err: any) {
      setError(err.response?.data?.error || 'Something went wrong');
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#121212] px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-[#1e1e1e] text-white w-full max-w-md p-8 rounded-2xl shadow-lg border border-[#333] space-y-5"
      >
        <h2 className="text-3xl font-bold text-center">👤 Sign Up</h2>

        {error && (
          <p className="text-red-500 text-sm text-center bg-[#2a2a2a] p-2 rounded-md border border-red-600">
            {error}
          </p>
        )}

        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-[#2a2a2a] text-white border border-gray-600 placeholder-gray-400 focus:outline-none focus:border-pink-500"
          required
        />

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
          className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 rounded-lg transition"
        >
          🚀 Sign Up
        </button>

        <p className="text-center text-sm text-gray-400">
          Already have an account?{' '}
          <Link href="/login" className="text-pink-400 underline hover:text-pink-300">
            Log In
          </Link>
        </p>
      </form>
    </div>
  );
}