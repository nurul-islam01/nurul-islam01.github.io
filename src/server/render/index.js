import { resolve } from "path";
import React from "react";
import { renderToString } from "react-dom/server";
import { matchRoutes } from "react-router-dom";
import { StaticRouter } from "react-router-dom/server";
import { ChunkExtractor, ChunkExtractorManager } from "@loadable/server";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";

import App from "client/app";
import configurationStore from "client/store";
import routes from "client/routes";

import ssrPrepass from "react-ssr-prepass";
import renderHtml from "./render-html";
import sitemapGenerator from "./sitemap-generator";

const renderController = async (req, res) => {
  const store = configurationStore();

  const contexts = [];

  const loadBranchData = () => {
    const routesMatch = matchRoutes(routes, req.path);

    sitemapGenerator(req, routesMatch);

    const promises = routesMatch.map(({ route, params }) => {
      if (typeof route.to === "string") {
        contexts.push({ url: route.to, status: 301 });

        return Promise.resolve(null);
      }

      if (route.path === "*") {
        contexts.push({ status: 404 });
      } else {
        contexts.push({ status: 200 });
      }

      if (typeof route.loadData === "function") {
        const thunks = route.loadData({ params, getState: store.getState }).map((thunk) => store.dispatch(thunk));

        return Promise.all(thunks);
      }

      return Promise.resolve(null);
    });

    return Promise.all(promises);
  };

  await loadBranchData();

  const [redirectContext] = contexts;

  if (redirectContext && redirectContext.url) return res.redirect(301, redirectContext.url);

  const statsFile = resolve(process.cwd(), "public/stats.json");

  const extractor = new ChunkExtractor({ statsFile });

  const helmetContext = {};

  const element = (
    <ChunkExtractorManager extractor={extractor}>
      <Provider store={store}>
        <StaticRouter location={req.url}>
          <HelmetProvider context={helmetContext}>
            <App />
          </HelmetProvider>
        </StaticRouter>
      </Provider>
    </ChunkExtractorManager>
  );

  await ssrPrepass(element);

  const markup = renderToString(element);

  const { helmet: head } = helmetContext;

  const initialState = store.getState();

  const canonical = [
    `${req.protocol}://`,
    req.host,
    ![80, 443].includes(req.port) && `:${req.port}`,
    req.originalUrl,
  ].join("");

  const css = await extractor.getCssString();

  const html = renderHtml(head, canonical, extractor, markup, css, initialState);
  const status = contexts.filter(({ status: stt }) => stt === 404).length !== 0 ? 404 : 200;

  return res.send(html, status, {
    "Content-Type": "text/html; charset=utf-8",
    "Cache-Control": "max-age=3600,s-maxage=3600",
    "Cross-Origin-Opener-Policy": "same-origin",
    "Content-Security-Policy":
      "default-src * self blob: data: gap:; style-src * self 'unsafe-inline' blob: data: gap:; script-src * 'self' 'unsafe-eval' 'unsafe-inline' blob: data: gap:; object-src * 'self' blob: data: gap:; img-src * self 'unsafe-inline' blob: data: gap:; connect-src self * 'unsafe-inline' blob: data: gap:; frame-src * self blob: data: gap:;",
  });
};

export default renderController;
