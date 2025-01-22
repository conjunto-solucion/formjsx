const path = require('path')

module.exports = {
  entry: './src/index.ts',

  output: {
    path: path.resolve(__dirname, 'formtsx'),
    filename: 'index.js',
    library: 'formtsx',
    libraryTarget: 'umd',
    globalObject: 'this',
    clean: true
  },

  mode: 'production',

  externals: {
    react: 'react',
    'react-dom': 'react-dom',
  },

  resolve: {
    extensions: ['.ts', '.tsx'],
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  }
};