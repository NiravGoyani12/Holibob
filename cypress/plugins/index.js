const browserify = require('@cypress/browserify-preprocessor');
const cucumber = require('cypress-cucumber-preprocessor').default;
const resolve = require('resolve');
const dotenvPlugin = require('cypress-dotenv');
const cypressConfig = require(`../config/dev.json`);

module.exports = (on, config) => {
  const useConfig = dotenvPlugin(config);

  const options = {
    ...browserify.defaultOptions,
    typescript: resolve.sync('typescript', { baseDir: config.projectRoot }),
  };

  on('file:preprocessor', cucumber(options));
  require('@cypress/code-coverage/task')(on, useConfig);

  return Object.assign(useConfig, cypressConfig);
};
