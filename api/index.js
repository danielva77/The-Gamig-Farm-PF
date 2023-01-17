require("dotenv").config()
const server = require("./src/app.js")
const { conn } = require("./src/db.js")
const axios = require("axios")

const port = process.env.PORT || 3001

// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  // Creamos una variable de entorno llamada PORT (le damos valor 3001 localmente).
  // Heroku despues va a usar un valor propio internamente (distinto) para esa variable PORT.
  server.listen(port, () => {
    console.log(`%s listening at ${port}`) // eslint-disable-line no-console
  })
})
