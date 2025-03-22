/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/bekno-landing-page' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/bekno-landing-page/' : '',
}

module.exports = nextConfig
