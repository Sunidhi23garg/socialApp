'use client';

import { useSession } from 'next-auth/react';
import { useState } from 'react';

export default function CreatePostForm() {
  const { data: session } = useSession();
  const [content, setContent] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!session?.user?.email) {
      alert('You must be logged in to create a post.');
      return;
    }

    const res = await fetch('/api/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content,
        imageUrl,
        userEmail: session.user.email,
      }),
    });

    setLoading(false);
    if (res.ok) {
      setContent('');
      setImageUrl('');
      alert('Post created!');
    } else {
      alert('Failed to create post');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto mt-8 bg-[#1e1e1e] p-6 rounded-2xl shadow-xl border border-[#333] space-y-5"
    >
      <h2 className="text-2xl text-white font-bold text-center">📝 Create a Post</h2>

      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="What's on your mind?"
        rows={4}
        className="w-full p-3 rounded-lg bg-[#2a2a2a] text-white border border-gray-600 placeholder-gray-400 focus:outline-none focus:border-pink-500"
        required
      />

      <input
        type="text"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        placeholder="Optional image URL"
        className="w-full p-3 rounded-lg bg-[#2a2a2a] text-white border border-gray-600 placeholder-gray-400 focus:outline-none focus:border-pink-500"
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 rounded-lg transition"
      >
        {loading ? 'Posting...' : '🚀 Post'}
      </button>
    </form>
  );
}