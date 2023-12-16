const path = require("path");
const fs = require("fs");
const { DefinePlugin, ProvidePlugin } = require("webpack");
const dotenv = require("dotenv");
const { expand: dotenvExpand } = require("dotenv-expand");

const REACT_APP = /^REACT_APP_/i;

// eslint-disable-next-line prefer-destructuring
const NODE_ENV = process.env.NODE_ENV;

const envPath = path.resolve(process.cwd(), `.env`);

const loadEnv = (...paths) => {
  const envFiles = [
    `${envPath}.${NODE_ENV}.local`,
    NODE_ENV !== "test" && `${envPath}.local`,
    `${envPath}.${NODE_ENV}`,
    envPath,
    ...paths,
  ].filter(Boolean);

  envFiles.forEach((file) => {
    if (fs.existsSync(file)) {
      dotenvExpand(dotenv.config({ path: file }));
    }
  });
};
exports.loadEnv = loadEnv;

class DotenvWebpackPlugin {
  constructor(options) {
    this.PLUGIN_NAME = "DotenvWebpackPlugin";

    this.options = { ...options };

    loadEnv(this.options.path);
  }

  apply(compiler) {
    if (this.options.isWeb) {
      new ProvidePlugin({
        process: "process/browser",
      }).apply(compiler);
    }

    // eslint-disable-next-line prefer-object-spread
    const vars = Object.assign({}, process.env);

    const raw = Object.keys(vars)
      .filter((key) => (this.options.isWeb ? REACT_APP.test(key) : true))
      .reduce(
        (obj, key) => {
          const _obj = obj;
          _obj[key] = vars[key];
          return _obj;
        },
        {
          NODE_ENV: NODE_ENV || "development",
        },
      );

    const formattedVars = Object.keys(raw).reduce((env, key) => {
      const _env = env;
      _env[`process.env.${key}`] = JSON.stringify(raw[key]);

      return _env;
    }, {});

    new DefinePlugin(formattedVars).apply(compiler);
  }
}

exports.DotenvWebpackPlugin = DotenvWebpackPlugin;
