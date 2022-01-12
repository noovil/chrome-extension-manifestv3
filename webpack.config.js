const path = require('path');
 
module.exports = {
  mode: 'development', //change this to production
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  }
}
