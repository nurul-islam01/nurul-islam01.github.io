const path = require('path');
const withOffline = require('next-offline');

const nextConfig = {
  reactStrictMode: true,
  generateSw: true,
  images: {
    unoptimized: true
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack']
    });

    return config;
  },
  basePath: '/github-pages',
  output: 'export'
};

module.exports = withOffline(nextConfig);
