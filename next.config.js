/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  env: { urlAPI: process.env.NEXT_PUBLIC_API },
};

module.exports = nextConfig;
