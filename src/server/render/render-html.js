import serialize from "serialize-javascript";
import { minify } from "html-minifier";

import loadFonts from "../../client/font";

const renderHtml = (head, canonical, extractor, markup, css, initialState = {}) => {
  let googleMetaTag = "";

  if (process.env.GOOGLE_SITE_VERIFICATION) {
    googleMetaTag = `<meta name="google-site-verification" content="${process.env.GOOGLE_SITE_VERIFICATION}" />`;
  }

  const html = `
    <!DOCTYPE html>
    <html lang="bn">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="brand_name" content="nuruldev">
        
        ${googleMetaTag}
        ${head?.title?.toString()}
        ${head?.meta?.toString()}
        
        <meta property="og:type" content="website">
        <meta property="og:site_name" content="Rajneete">
        <meta property="og:image:width" content="1200">
        <meta property="og:image:height" content="630">
        
        <meta name="twitter:site" content="@Nuruldev">
        
        <meta name="apple-mobile-web-app-title" content="nuruldev">
        <meta content="yes" name="apple-mobile-web-app-capable">
        <meta content="black" name="apple-mobile-web-app-status-bar-style">
        
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
        <link rel="manifest" href="/site.webmanifest">
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ff0000">
        <meta name="msapplication-TileColor" content="#da532c">
        <meta name="theme-color" content="#000">
        
        <meta name="msapplication-TileColor" content="#fff">
        <link rel="manifest" href="/site.webmanifest">
        <meta name="msapplication-TileColor" content="#fff">
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png">
        <link rel="canonical" href="${canonical}" />
        
        ${process.env.SECRET || ""}
        ${head?.base?.toString()}
        ${head?.link?.toString()}
        
        <style>${css}</style>
        ${extractor.getLinkTags()}
        ${extractor.getStyleTags()}
        <script src="/modernizr.custom.js"></script>
      </head>
      <body ${head.bodyAttributes.toString()} class="page">

        <div id="app">${markup}</div>
   
        <script>window.__INITIAL_STATE__ = ${serialize(initialState)}</script>
        
        <script src="/jquery-2.1.3.min.js"></script>
        <script src="/imagesloaded.pkgd.min.js"></script>
        <script src="/bootstrap.min.js"></script>
        <script src="/jquery.shuffle.min.js"></script>
        <script src="/masonry.pkgd.min.js"></script>
        <script src="/owl.carousel.min.js"></script>
        <script src="/jquery.magnific-popup.min.js"></script>
        <script src="/validator.js"></script>
        <script src="/custom.js"></script>
        ${extractor.getScriptTags()}
        ${head.script.toString()}
        <script>${loadFonts()}</script>
        
      </body>
    </html>
  `;

  const minifyConfig = {
    collapseWhitespace: true,
    removeComments: true,
    trimCustomFragments: true,
    minifyCSS: true,
    minifyJS: true,
    minifyURLs: true,
  };

  return __DEV__ ? html : minify(html, minifyConfig);
};

export default renderHtml;
