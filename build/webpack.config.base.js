const path = require('path');
module.exports = {
  entry: {
    'remainder-time-formatter': './src/remainder-time-formatter.ts',
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [{ loader: 'babel-loader' }, { loader: 'eslint-loader' }],
      },
    ],
  },
};
