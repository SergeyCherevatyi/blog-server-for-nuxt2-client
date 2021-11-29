const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '.env') })
const consola = require('consola')

const app = require('./app')

const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT



app.listen(port, host, () => {
  consola.ready({
    message: `Server listening on http://${host}:${port}`
  })
})

