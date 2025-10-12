const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin('./src/lib/i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Only use basePath in production (for GitHub Pages deployment)
  ...(process.env.NODE_ENV === 'production' && {
    basePath: '/bekno-landing-page',
    assetPrefix: '/bekno-landing-page/',
  }),
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  trailingSlash: true,
};

module.exports = withNextIntl(nextConfig);
