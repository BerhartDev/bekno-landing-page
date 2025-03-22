/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['localhost'],
  },
  basePath: process.env.NODE_ENV === 'production' ? '/bekno-landing-page' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/bekno-landing-page/' : '',
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
}

module.exports = nextConfig
