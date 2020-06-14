const { NODE_ENV } = process.env;
const envPath = `.env.${NODE_ENV.toLowerCase()}`;
const { parsed: localEnv = {} } = require('dotenv').config({ path: envPath });
const webpack = require('webpack');
const withImages = require('next-images');
const { join } = require('path');
const tsconfig = require('./tsconfig.json');
const tsPaths = tsconfig.compilerOptions.paths;

module.exports = withImages({
  webpack(config) {
    config.plugins.push(new webpack.EnvironmentPlugin(localEnv));

    Object.keys(tsPaths).forEach((key) => {
      const newKey = key.replace('/*', '');
      const value = tsPaths[key][0].replace('/*', '');

      config.resolve.alias[newKey] = join(__dirname, value);
    });

    return config;
  }
});
