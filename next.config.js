const path = require('path');

const withPWA = require('@ducanh2912/next-pwa').default({
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  swcMinify: true,
  dest: 'public',
  fallbacks: {
    document: '/offline'
  },
  workboxOptions: {
    disableDevLogs: true
  }
});

const nextConfig = {
  reactStrictMode: true,
  exportTrailingSlash: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  eslint: { ignoreDuringBuilds: true },
  exportPathMap: async function () {
    return {
      '/': { page: '/' },
      '/resume': { page: '/resume' },
      '/contact': { page: '/contact' },
      '/offline': { page: '/offline' },
      '/mail': { page: '/mail' }
    };
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack']
    });

    return config;
  },
  distDir: 'out',
  images: {
    unoptimized: true
  },
  compiler: {
    removeConsole: true
  }
};

module.exports = withPWA(nextConfig);
