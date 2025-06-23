/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [
      'utfs.io',
      'api.dicebear.com',
      'encrypted-tbn0.gstatic.com', // ✅ Add this
      'images.unsplash.com',
      'i.imgur.com',
      'res.cloudinary.com',
    ],
  },
};

module.exports = nextConfig;




// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   eslint: {
//     ignoreDuringBuilds: true,
//   },
//   images: {
//     domains: ['utfs.io', 'api.dicebear.com'],
//   },
// };

// module.exports = nextConfig;

