/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [
      'utfs.io',
      'api.dicebear.com',
      'images.unsplash.com',
      'cdn.pixabay.com',
      'encrypted-tbn0.gstatic.com'
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
//     domains: [
//       'utfs.io',
//       'api.dicebear.com',
//       'encrypted-tbn0.gstatic.com', 
//       'images.unsplash.com',
//       'i.imgur.com',
//       'res.cloudinary.com',
//       'cdn.pixabay.com', 
//     ],
//   },
// };

// module.exports = nextConfig;




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

