const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
  },
  
  resolve: {
    alias: {
      fs: path.join(__dirname, "./src/fakeFs.js")
    }
  }

};




