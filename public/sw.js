if (!self.define) {
  let e,
    s = {};
  const a = (a, c) => (
    (a = new URL(a + '.js', c).href),
    s[a] ||
      new Promise((s) => {
        if ('document' in self) {
          const e = document.createElement('script');
          (e.src = a), (e.onload = s), document.head.appendChild(e);
        } else (e = a), importScripts(a), s();
      }).then(() => {
        let e = s[a];
        if (!e) throw new Error(`Module ${a} didn’t register its module`);
        return e;
      })
  );
  self.define = (c, i) => {
    const n =
      e ||
      ('document' in self ? document.currentScript.src : '') ||
      location.href;
    if (s[n]) return;
    let f = {};
    const t = (e) => a(e, n),
      d = { module: { uri: n }, exports: f, require: t };
    s[n] = Promise.all(c.map((e) => d[e] || t(e))).then((e) => (i(...e), f));
  };
}
define(['./workbox-0ea65fa9'], function (e) {
  'use strict';
  importScripts('/fallback-382b0be8edf4f83a.js'),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: '/_next/static/chunks/121-833d5ad5a7e6c5dd.js',
          revision: '833d5ad5a7e6c5dd'
        },
        {
          url: '/_next/static/chunks/675-9125203288a5e8b8.js',
          revision: '9125203288a5e8b8'
        },
        {
          url: '/_next/static/chunks/80-1f12d493e2c8059b.js',
          revision: '1f12d493e2c8059b'
        },
        {
          url: '/_next/static/chunks/framework-5429a50ba5373c56.js',
          revision: '5429a50ba5373c56'
        },
        {
          url: '/_next/static/chunks/main-9f29e2e1f936ddad.js',
          revision: '9f29e2e1f936ddad'
        },
        {
          url: '/_next/static/chunks/pages/_app-39b8485e6cdaa72a.js',
          revision: '39b8485e6cdaa72a'
        },
        {
          url: '/_next/static/chunks/pages/_error-b6491f42fb2263bb.js',
          revision: 'b6491f42fb2263bb'
        },
        {
          url: '/_next/static/chunks/pages/contact-8dfede02f9e33660.js',
          revision: '8dfede02f9e33660'
        },
        {
          url: '/_next/static/chunks/pages/index-7b92b31e98763c1a.js',
          revision: '7b92b31e98763c1a'
        },
        {
          url: '/_next/static/chunks/pages/offline-51ccf70c8b201387.js',
          revision: '51ccf70c8b201387'
        },
        {
          url: '/_next/static/chunks/pages/resume-f7c5df5647a5a9a0.js',
          revision: 'f7c5df5647a5a9a0'
        },
        {
          url: '/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js',
          revision: '837c0df77fd5009c9e46d446188ecfd0'
        },
        {
          url: '/_next/static/chunks/webpack-8fa1640cc84ba8fe.js',
          revision: '8fa1640cc84ba8fe'
        },
        {
          url: '/_next/static/css/8bdf0c772f2bbd20.css',
          revision: '8bdf0c772f2bbd20'
        },
        {
          url: '/_next/static/css/9ea42c21141294d2.css',
          revision: '9ea42c21141294d2'
        },
        {
          url: '/_next/static/css/d687bb0f6db268e7.css',
          revision: 'd687bb0f6db268e7'
        },
        {
          url: '/_next/static/css/d71bc7538547f5c1.css',
          revision: 'd71bc7538547f5c1'
        },
        {
          url: '/_next/static/md9VL7TBX4I88OTgOscgV/_buildManifest.js',
          revision: 'c65dcc189e904633cb63cc8d379aa25d'
        },
        {
          url: '/_next/static/md9VL7TBX4I88OTgOscgV/_ssgManifest.js',
          revision: 'b6652df95db52feb4daf4eca35380933'
        },
        {
          url: '/_next/static/media/0576f4f464c78623-s.p.woff2',
          revision: 'a242ba0df3a128a2cab929a8c45d5056'
        },
        {
          url: '/_next/static/media/10939feefdad71be-s.woff2',
          revision: '72b3ae37567ee5efdf2254b657c36ba9'
        },
        {
          url: '/_next/static/media/1b097aa12b72d9f9-s.woff2',
          revision: 'ba40202b1c1dcacbdbb7bcd2042a410f'
        },
        {
          url: '/_next/static/media/20b8b8f6f47c1e10-s.woff2',
          revision: '7def222d1a45cb1cb7d8c3ae675dbdcc'
        },
        {
          url: '/_next/static/media/25a4feaba4ca53ae-s.p.woff2',
          revision: '2c12ab3a0b1db8654af95a12a6320231'
        },
        {
          url: '/_next/static/media/26532f7f7af6b3bf-s.woff2',
          revision: '5205803688528a310a2db45c3acd3465'
        },
        {
          url: '/_next/static/media/2bca3ff0a27e486e-s.woff2',
          revision: '55ac5f95e121978f0c0c4dbb3997153b'
        },
        {
          url: '/_next/static/media/370d1cc320ec5619-s.woff2',
          revision: 'a6ff41d10fa89e7f8fec937c243d7428'
        },
        {
          url: '/_next/static/media/376dd8dc38524313-s.p.woff2',
          revision: 'af4d371a10271dafeb343f1eace762bc'
        },
        {
          url: '/_next/static/media/3828f203592f7603-s.woff2',
          revision: 'e9fd398a43c9e51f9ee14e757eaf95d9'
        },
        {
          url: '/_next/static/media/46113b96cb3accd4-s.woff2',
          revision: '8372bf021fd53710c65e96dd711d3732'
        },
        {
          url: '/_next/static/media/4ac0de86ec3c076b-s.woff2',
          revision: '270b098aa19df32f40554b66d01538d3'
        },
        {
          url: '/_next/static/media/591327bf3b62a611-s.woff2',
          revision: '0ed299a4bb5262e17e2145783b2c18f1'
        },
        {
          url: '/_next/static/media/5eeffccf17b91592-s.woff2',
          revision: 'b8716f11f2e29539d2f925c2ac543cd5'
        },
        {
          url: '/_next/static/media/7777133e901cd5ed-s.p.woff2',
          revision: 'a09f2fccfee35b7247b08a1a266f0328'
        },
        {
          url: '/_next/static/media/8269b0aba99df900-s.woff2',
          revision: 'efd6a6a18154ed2f4807d32eb2fc63d5'
        },
        {
          url: '/_next/static/media/839135d04a097cea-s.woff2',
          revision: '79e6e81d255edac7e8627c7e16baccf5'
        },
        {
          url: '/_next/static/media/87c72f23c47212b9-s.woff2',
          revision: '790d0c8dbcd491d29d58f1369c199d40'
        },
        {
          url: '/_next/static/media/8d1a51bb45dd4d14-s.woff2',
          revision: '185244e129c78b5a1e8de9b0319e5f93'
        },
        {
          url: '/_next/static/media/916d3686010a8de2-s.p.woff2',
          revision: '9212f6f9860f9fc6c69b02fedf6db8c3'
        },
        {
          url: '/_next/static/media/953974ac5e9ff354-s.woff2',
          revision: '6731e1ba3788bda094c89ee8fc131aef'
        },
        {
          url: '/_next/static/media/9a881e2ac07d406b-s.p.woff2',
          revision: '25b0e113ca7cce3770d542736db26368'
        },
        {
          url: '/_next/static/media/9c1560f572ee7773-s.p.woff2',
          revision: '267ebe38acb78ca90441cdb3f0f44b7d'
        },
        {
          url: '/_next/static/media/9d47503f7b30ab41-s.woff2',
          revision: 'ba7c820d1b04e35a790deaeae2a605f4'
        },
        {
          url: '/_next/static/media/a26e6d84d4646084-s.woff2',
          revision: '34ad495cbfd455f9e3df79c1e7fa26bb'
        },
        {
          url: '/_next/static/media/aae01cce2705e0ac-s.p.woff2',
          revision: '613d05fdd4da294c041ffac04802b86b'
        },
        {
          url: '/_next/static/media/ac614beb32f7a7c2-s.woff2',
          revision: '20f5992a9c019fb146a38e1cc0c101d3'
        },
        {
          url: '/_next/static/media/aefc8ad6d88b3354-s.woff2',
          revision: '6a4298fc0390ec22c52f618daa0e82bf'
        },
        {
          url: '/_next/static/media/b5492b5208029f67-s.p.woff2',
          revision: '858549c2cb50c37c733cfa191fdb07ea'
        },
        {
          url: '/_next/static/media/bfd61103028f3673-s.woff2',
          revision: '17352fe06a1b390f7f9ee875d2863c5f'
        },
        {
          url: '/_next/static/media/c04551857776278f-s.p.woff2',
          revision: '8d91ec1ca2d8b56640a47117e313a3e9'
        },
        {
          url: '/_next/static/media/ca421fdfa52471e7-s.p.woff2',
          revision: 'a51528d2000e9b4c894c275cc5722adb'
        },
        {
          url: '/_next/static/media/d36a2a2bb416f59e-s.p.woff2',
          revision: 'a7f7eebec745ef48ccf7a3d08c66d84a'
        },
        {
          url: '/_next/static/media/d5e464fc682cd8bc-s.woff2',
          revision: 'b86ac4c83477056ebb840624b578a17a'
        },
        {
          url: '/_next/static/media/d869208648ca5469-s.p.woff2',
          revision: '72993dddf88a63e8f226656f7de88e57'
        },
        {
          url: '/_next/static/media/ddd7bd64eb4cbfa0-s.p.woff2',
          revision: '88042d51a299f20ab0ddf917838fe403'
        },
        {
          url: '/_next/static/media/e025c64520263018-s.woff2',
          revision: 'dc820d9f0f62811268590ff631f36be9'
        },
        {
          url: '/_next/static/media/e0fa15d3ea53c266-s.woff2',
          revision: '4154c144fb0de7910a8088bf10aca2eb'
        },
        {
          url: '/_next/static/media/e8b4f344df4a68fa-s.woff2',
          revision: '7b89c5f4eaa1a5d8011093db05c662c3'
        },
        {
          url: '/_next/static/media/f1906dfec1c95e3b-s.woff2',
          revision: '92107d80bda8d905454cf310e5b7c18f'
        },
        {
          url: '/_next/static/media/f3e2c6ff694164ed-s.woff2',
          revision: 'cdcc6927d15a9ab1f35ead5962324e82'
        },
        {
          url: '/_next/static/media/f93b79c1ea023ab6-s.woff2',
          revision: '96b6d54684daa94742f7bfd72a981213'
        },
        {
          url: '/fallback-382b0be8edf4f83a.js',
          revision: 'a5281aa1504c5d6bcd7ba1097870376a'
        },
        { url: '/offline', revision: 'md9VL7TBX4I88OTgOscgV' },
        {
          url: '/swe-worker-4da67dda9bc18c53.js',
          revision: '5a47d90db13bb1309b25bdf7b363570e'
        }
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          {
            cacheWillUpdate: async ({ response: e }) =>
              e && 'opaqueredirect' === e.type
                ? new Response(e.body, {
                    status: 200,
                    statusText: 'OK',
                    headers: e.headers
                  })
                : e
          },
          {
            handlerDidError: async ({ request: e }) =>
              'undefined' != typeof self ? self.fallback(e) : Response.error()
          }
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
          {
            handlerDidError: async ({ request: e }) =>
              'undefined' != typeof self ? self.fallback(e) : Response.error()
          }
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
          {
            handlerDidError: async ({ request: e }) =>
              'undefined' != typeof self ? self.fallback(e) : Response.error()
          }
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
          {
            handlerDidError: async ({ request: e }) =>
              'undefined' != typeof self ? self.fallback(e) : Response.error()
          }
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 2592e3 }),
          {
            handlerDidError: async ({ request: e }) =>
              'undefined' != typeof self ? self.fallback(e) : Response.error()
          }
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/static.+\.js$/i,
      new e.CacheFirst({
        cacheName: 'next-static-js-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
          {
            handlerDidError: async ({ request: e }) =>
              'undefined' != typeof self ? self.fallback(e) : Response.error()
          }
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-image',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
          {
            handlerDidError: async ({ request: e }) =>
              'undefined' != typeof self ? self.fallback(e) : Response.error()
          }
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: 'static-audio-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          {
            handlerDidError: async ({ request: e }) =>
              'undefined' != typeof self ? self.fallback(e) : Response.error()
          }
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp4|webm)$/i,
      new e.CacheFirst({
        cacheName: 'static-video-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          {
            handlerDidError: async ({ request: e }) =>
              'undefined' != typeof self ? self.fallback(e) : Response.error()
          }
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 48, maxAgeSeconds: 86400 }),
          {
            handlerDidError: async ({ request: e }) =>
              'undefined' != typeof self ? self.fallback(e) : Response.error()
          }
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          {
            handlerDidError: async ({ request: e }) =>
              'undefined' != typeof self ? self.fallback(e) : Response.error()
          }
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-data',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          {
            handlerDidError: async ({ request: e }) =>
              'undefined' != typeof self ? self.fallback(e) : Response.error()
          }
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          {
            handlerDidError: async ({ request: e }) =>
              'undefined' != typeof self ? self.fallback(e) : Response.error()
          }
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      ({ sameOrigin: e, url: { pathname: s } }) =>
        !(!e || s.startsWith('/api/auth/callback') || !s.startsWith('/api/')),
      new e.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
          {
            handlerDidError: async ({ request: e }) =>
              'undefined' != typeof self ? self.fallback(e) : Response.error()
          }
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      ({ request: e, url: { pathname: s }, sameOrigin: a }) =>
        '1' === e.headers.get('RSC') &&
        '1' === e.headers.get('Next-Router-Prefetch') &&
        a &&
        !s.startsWith('/api/'),
      new e.NetworkFirst({
        cacheName: 'pages-rsc-prefetch',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          {
            handlerDidError: async ({ request: e }) =>
              'undefined' != typeof self ? self.fallback(e) : Response.error()
          }
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      ({ request: e, url: { pathname: s }, sameOrigin: a }) =>
        '1' === e.headers.get('RSC') && a && !s.startsWith('/api/'),
      new e.NetworkFirst({
        cacheName: 'pages-rsc',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          {
            handlerDidError: async ({ request: e }) =>
              'undefined' != typeof self ? self.fallback(e) : Response.error()
          }
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: { pathname: e }, sameOrigin: s }) => s && !e.startsWith('/api/'),
      new e.NetworkFirst({
        cacheName: 'pages',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          {
            handlerDidError: async ({ request: e }) =>
              'undefined' != typeof self ? self.fallback(e) : Response.error()
          }
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      ({ sameOrigin: e }) => !e,
      new e.NetworkFirst({
        cacheName: 'cross-origin',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
          {
            handlerDidError: async ({ request: e }) =>
              'undefined' != typeof self ? self.fallback(e) : Response.error()
          }
        ]
      }),
      'GET'
    ),
    (self.__WB_DISABLE_DEV_LOGS = !0);
});
