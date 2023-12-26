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
  output: 'export'
};

module.exports = withPWA(nextConfig);
