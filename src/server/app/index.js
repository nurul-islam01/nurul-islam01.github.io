import { resolve } from "path";
import PureHttp from "pure-http";
import helmet from "helmet";
import favicon from "serve-favicon";
import compression from "compression";
import serve from "serve-static";

import render from "../render";

const app = PureHttp();

app.use(serve(resolve(process.cwd(), "public")));
app.use(favicon(resolve(process.cwd(), "public/favicon.ico")));
app.use(compression());
app.use(helmet({ contentSecurityPolicy: false, crossOriginEmbedderPolicy: false }));

/* istanbul ignore next */
const websocketServerCreator = __DEV__ ? require("./websocket-server-creator").default : undefined;
const webpackMiddleware = __DEV__ ? require("../middlewares/webpack.middleware").default : undefined;

if (typeof webpackMiddleware === "function") {
  const ws = websocketServerCreator(app);

  app.use(webpackMiddleware(ws));
}

app.get("/api/health", (req, res) => res.status(200).end());

app.get(/^(?!.*^\/api\/)(.*)/, render);

app.use((req, res, _next) => {
  res.status(404).json({
    success: false,
    error: `Cannot ${req.method} ${req.path}`,
  });
});

export default app;
