const path = require('path');
module.exports = {
  entry: {
    'remainder-time-formatter': './src/remainder-time-formatter.js',
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    libraryTarget: 'umd',
    library: 'RemainderTimeFormatter',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [{ loader: 'babel-loader' }],
      },
    ],
  },
};
