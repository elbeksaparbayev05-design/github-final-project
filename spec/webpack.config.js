const path = require('path');

module.exports = {
  entry: './script.js',  // JS fayling manzili
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'production'
};