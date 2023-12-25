const path = require('path');
const withOffline = require('next-offline');
const withPwa = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');
const withPlugin = require('next-compose-plugins');

const nextConfig = withPlugin(
  [
    [
      withPwa,
      {
        pwa: {
          dest: 'public',
          runtimeCaching
        }
      }
    ],
    [
      withOffline,
      {
        workbox: {
          swDest: 'static/service-worker.js',
          runtimeCaching: [
            {
              urlPattern: /^https?.*/,
              handler: 'NetworkFirst',
              options: {
                cacheName: 'offlineCache',
                expiration: {
                  maxEntries: 200
                }
              }
            }
          ]
        }
      }
    ]
  ],
  {
    reactStrictMode: true,
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
    output: 'export'
  }
);

module.exports = nextConfig;
