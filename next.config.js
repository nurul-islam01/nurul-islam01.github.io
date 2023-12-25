const path = require('path');
const runtimeCaching = require('next-pwa/cache');

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  pwa: {
    dest: 'public',
    runtimeCaching
  },
  scope: '/',
  assetPrefix: isProd ? 'https://www.nurulislam.dev' : undefined,
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  eslint: { ignoreDuringBuilds: true },
  exportPathMap: async () => {
    return {
      '/': { page: '/' },
      '/resume': { page: '/resume' },
      '/contact': { page: '/contact' }
    };
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en'
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack']
    });

    return config;
  }
};

module.exports = nextConfig;
