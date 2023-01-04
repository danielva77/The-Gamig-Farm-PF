require("dotenv").config()
const server = require("./src/app.js")
const { conn } = require("./src/db.js")
const { typesInDb } = require("./src/controllers/Controllers")
const port = process.env.PORT || 3001

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  // llamamos los types de la api y los guardamos en la base de datos
  typesInDb(),
    // Creamos una variable de entorno llamada PORT (le damos valor 3001 localmente).
    // Heroku despues va a usar un valor propio internamente (distinto) para esa variable PORT.
    server.listen(port, () => {
      console.log(`%s listening at ${port}`) // eslint-disable-line no-console
    })
})
