/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    GOOGLE_MAPS_API: process.env.GOOGLE_MAPS_API,
  },
};

module.exports = nextConfig;
