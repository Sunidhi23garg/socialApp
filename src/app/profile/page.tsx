'use client';

import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import ImageUpload from '@/components/UploadButton';

export default function ProfilePage() {
  const { data: session } = useSession();
  const [profile, setProfile] = useState({
    name: '',
    bio: '',
    image: '',
  });
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (session?.user?.email) {
      fetch(`/api/users?email=${session.user.email}`)
        .then(res => res.json())
        .then(data => {
          setProfile(data);
          setLoading(false);
        });
    }
  }, [session]);

  const handleUpdate = async () => {
    if (!session?.user?.email) return;

    await fetch('/api/users', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: session.user.email,
        bio: profile.bio,
        image: profile.image,
      }),
    });

    setEditMode(false);
  };

  if (loading) {
    return <p className="text-center text-gray-300 mt-10">Loading...</p>;
  }

  const avatarFallback = `https://api.dicebear.com/6.x/initials/svg?seed=${encodeURIComponent(profile.name || 'User')}`;

  return (
    <div className="max-w-md mx-auto mt-12 bg-[#1e1e1e] p-6 rounded-2xl shadow-lg border border-[#333] text-white">
      <h2 className="text-3xl font-bold text-center mb-6">🧑‍💼 My Profile</h2>

      <div className="text-center mb-5">
        <img
          src={profile.image || avatarFallback}
          alt="Profile"
          className="w-24 h-24 mx-auto rounded-full border border-gray-500 object-cover bg-white"
        />
      </div>

      <label className="block mb-2 text-sm font-semibold text-gray-300">Name</label>
      <input
        type="text"
        value={profile.name}
        disabled
        className="w-full p-3 mb-4 rounded-lg bg-[#2a2a2a] text-white border border-gray-600"
      />

      <label className="block mb-2 text-sm font-semibold text-gray-300">Bio</label>
      <textarea
        value={profile.bio}
        disabled={!editMode}
        onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
        className="w-full p-3 mb-4 rounded-lg bg-[#2a2a2a] text-white border border-gray-600"
        rows={3}
      />

      {editMode && (
        <div className="mb-4">
          <label className="block mb-2 text-sm font-semibold text-gray-300">Upload Profile Image</label>
          <ImageUpload onUploadComplete={(url) => setProfile({ ...profile, image: url })} />
        </div>
      )}

      <div className="mt-6">
        {editMode ? (
          <button
            onClick={handleUpdate}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 rounded-lg transition"
          >
            ✅ Save Changes
          </button>
        ) : (
          <button
            onClick={() => setEditMode(true)}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition"
          >
            ✏️ Edit Profile
          </button>
        )}
      </div>
    </div>
  );
}