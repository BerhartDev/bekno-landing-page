const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin('./src/lib/i18n/request.ts');

// GitHub Pages serves the site from /bekno-landing-page. Vercel serves it at the domain root,
// and also builds with NODE_ENV=production, so the prefix must stay off that platform.
const isGithubPages = process.env.NODE_ENV === 'production' && process.env.VERCEL !== '1';

// Public URLs stay on the company domain while hosting moves between GitHub Pages and Vercel.
function resolveSiteUrl() {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '');
  return configured || 'https://bekno.com.br';
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  ...(isGithubPages && {
    basePath: '/bekno-landing-page',
    assetPrefix: '/bekno-landing-page/',
  }),
  env: {
    NEXT_PUBLIC_BASE_PATH: isGithubPages ? '/bekno-landing-page' : '',
    NEXT_PUBLIC_SITE_URL: resolveSiteUrl(),
  },
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
