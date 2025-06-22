/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['utfs.io', 'api.dicebear.com'],
  },
};

module.exports = nextConfig;



// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   eslint: {
//     ignoreDuringBuilds: true,
//   },
// };

// module.exports = nextConfig;

