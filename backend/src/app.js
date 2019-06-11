import express from 'express'
import morgan from 'morgan'
import router from './routes/routes'
import { connectDb } from './databaseConnection'
import bodyParser from 'body-parser'
import getEnv from '../enviroment'

const app = express()
const promBundle = require('express-prom-bundle')
const metricsMiddleware = promBundle({
  includeMethod: true,
  includeStatusCode: true
})

app.use(bodyParser.json())
app.use(metricsMiddleware)
app.use(bodyParser.urlencoded({ extended: false }))
app.use(morgan('dev'))
app.use('/', router)

const environment = getEnv(process.env.ENVIRONMENT)
const conection = connectDb(environment.mongoUrl).then(() => {
  const port = environment.port
  return app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Server running on port ${port}`)
  })
})
export const server = {
  close: () => conection.then(server => server.close())
}

export default app
