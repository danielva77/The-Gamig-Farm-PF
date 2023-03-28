const Dotenv = require('dotenv-webpack');

module.exports = {
  // ... tu configuración de Webpack ...
  plugins: [
    // Agrega el plugin de dotenv-webpack
    new Dotenv()
  ]
}