/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [
      'utfs.io',
      'api.dicebear.com',
      'cdn.pixabay.com',
      'images.unsplash.com',
      'encrypted-tbn0.gstatic.com',  
      'lh3.googleusercontent.com',  
      'images.google.com',          
    ],
  },
};

module.exports = nextConfig;

