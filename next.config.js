/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: "/app",
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
