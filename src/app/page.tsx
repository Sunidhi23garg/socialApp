'use client';

import Link from 'next/link';
import { useSession } from 'next-auth/react';

export default function HomePage() {
  const { data: session } = useSession();

  return (
    <div className="min-h-screen bg-[#121212] text-gray-200 p-6 flex flex-col items-center justify-center text-center">
      <h1 className="text-5xl font-bold text-pink-500 mb-4">🚀 Welcome to Buzzgram</h1>
      <p className="text-lg text-gray-300 max-w-xl mb-8">
        Buzzgram is your digital space to express yourself. Share posts, connect with people, and stay inspired. Whether it&apos;s a thought, a photo, or a moment — buzz it!
      </p>

      {session ? (
        <div className="flex gap-4 flex-wrap justify-center">
          <Link
            href="/feed"
            className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-full transition"
          >
            🌍 Go to Global Feed
          </Link>
          <Link
            href="/create-post"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition"
          >
            ✍️ Create Post
          </Link>
          <Link
            href="/profile"
            className="bg-gray-700 hover:bg-gray-800 text-white px-6 py-2 rounded-full transition"
          >
            🙍‍♀️ My Profile
          </Link>
        </div>
      ) : (
        <div className="flex gap-4 flex-wrap justify-center">
          <Link
            href="/login"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full transition"
          >
            🔐 Login
          </Link>
          <Link
            href="/signup"
            className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-2 rounded-full transition"
          >
            📝 Signup
          </Link>
        </div>
      )}
    </div>
  );
}