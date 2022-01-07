module.exports = {
  'cypress/**/*.(ts|js)?(x)': (filenames) => [
    `yarn lint . ${filenames.join(' ')}`,
    'yarn ts:check',
  ],
};
