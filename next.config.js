const withOffline = require('next-offline');
const path = require('path');

const nextConfig = {
  generateSw: true,
  scope: '/',
  reactStrictMode: true,
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
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack']
    });

    return config;
  },
  output: 'export',
  workboxOpts: {
    swDest: 'static/service-worker.js',
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'offlineCache',
          expiration: {
            maxEntries: 200,
            maxAgeSeconds: 30 * 24 * 60 * 60
          },
          networkTimeoutSeconds: 10
        }
      }
    ]
  }
};

module.exports = withOffline(nextConfig);
