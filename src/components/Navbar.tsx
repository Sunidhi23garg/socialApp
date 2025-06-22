'use client';

import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="bg-[#1e1e1e] border-b border-gray-700 p-4 text-white flex justify-between items-center">
      <Link href="/" className="font-bold text-2xl text-pink-500 hover:text-pink-400 transition">
        Buzzgram
      </Link>

      <div className="space-x-4 text-sm">
        {session ? (
          <>
            <Link
              href="/feed"
              className="hover:text-pink-400 transition"
            >
              Feed
            </Link>
            <Link
              href="/create-post"
              className="hover:text-pink-400 transition"
            >
              Create
            </Link>
            <Link
              href="/profile"
              className="hover:text-pink-400 transition"
            >
              Profile
            </Link>
            <button
              onClick={() => signOut({ callbackUrl: '/' })}
              className="text-red-400 hover:text-red-300 transition"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              href="/login"
              className="hover:text-pink-400 transition"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="hover:text-pink-400 transition"
            >
              Signup
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}