/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [
      'utfs.io',
      'api.dicebear.com',
      'images.unsplash.com',  // for Unsplash images
      'i.imgur.com',          // for Imgur images
      'res.cloudinary.com',   // for Cloudinary
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

