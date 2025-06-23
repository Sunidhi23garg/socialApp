'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface PostType {
  _id: string;
  content: string;
  image?: string;
  createdAt: string;
  likes: number;
  user?: {
    name?: string;
    image?: string;
  };
}

export default function FeedPage() {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/posts')
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch posts:", err);
        setLoading(false);
      });
  }, []);

  const handleLike = async (postId: string) => {
    try {
      const res = await fetch(`/api/posts/${postId}/like`, {
        method: 'POST',
      });

      if (res.ok) {
        const data = await res.json();
        setPosts((prev) =>
          prev.map((post) =>
            post._id === postId ? { ...post, likes: data.likeCount } : post
          )
        );
      } else {
        console.error("Like failed with status", res.status);
      }
    } catch (err) {
      console.error("Error liking post:", err);
    }
  };

  if (loading) {
    return <p className="text-center text-gray-400 mt-10">Loading posts...</p>;
  }

  if (posts.length === 0) {
    return <p className="text-center text-gray-400 mt-10">No posts yet!</p>;
  }

  return (
    <div className="min-h-screen bg-[#121212] text-gray-200 p-4">
      <h2 className="text-3xl font-bold text-center mb-8 text-white">🌍 Global Feed</h2>

      <div className="max-w-2xl mx-auto space-y-6">
        {posts.map((post) => (
          <div
            key={post._id}
            className="bg-[#1e1e1e] p-5 rounded-2xl shadow-lg border border-[#2a2a2a] transition hover:border-pink-600"
          >
            <div className="flex items-center gap-4 mb-4">
              <Image
                src={post.user?.image || '/avatar.png'}
                alt={post.user?.name || 'User'}
                width={40}
                height={40}
                unoptimized
                className="w-10 h-10 rounded-full border border-gray-500 object-cover"
              />
              <div>
                <p className="font-semibold text-white">{post.user?.name || 'Unknown User'}</p>
                <p className="text-sm text-gray-400">
                  {new Date(post.createdAt).toLocaleString()}
                </p>
              </div>
            </div>

            <p className="text-lg text-gray-100 mb-3 whitespace-pre-line">{post.content}</p>

            {post.image && (
              <Image
                src={post.image}
                alt="Post content"
                width={600}
                height={400}
                className="rounded-lg mb-3 max-h-96 w-full object-cover border border-gray-600"
              />
            )}

            <button
              onClick={() => handleLike(post._id)}
              className="flex items-center gap-2 text-sm bg-pink-600 text-white px-4 py-1.5 rounded-full hover:bg-pink-700 transition"
            >
              👏 {post.likes} Clap{post.likes !== 1 ? 's' : ''}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}