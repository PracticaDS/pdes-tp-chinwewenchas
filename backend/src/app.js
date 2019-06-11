import express from 'express'
import morgan from 'morgan'
import router from './routes/routes'
import { connectDb } from './databaseConnection'
import bodyParser from 'body-parser'
import getEnv from '../enviroment'
import Prometheus from 'prom-client'

const app = express()

const metricsInterval = Prometheus.collectDefaultMetrics()

const httpRequestDurationMs = new Prometheus.Histogram({
  name: 'http_request_duration_ms',
  help: 'Duration of HTTP requests in ms',
  labelNames: ['method', 'route', 'code'],
  buckets: [0.1, 5, 15, 50, 100, 200, 300, 400, 500]
})

app.use((req, res, next) => {
  res.locals.startEpoch = Date.now()
  next()
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(morgan('dev'))
app.use('/', router)
app.get('/metrics', (req, res) => {
  res.set('Content-Type', Prometheus.register.contentType)
  res.end(Prometheus.register.metrics())
})
app.use((err, req, res, next) => {
  res.statusCode = 500
  res.json({ error: err.message })
  next()
})
app.use((req, res, next) => {
  const responseTimeInMs = Date.now() - res.locals.startEpoch
  httpRequestDurationMs
    .labels(req.method, req.path, res.statusCode)
    .observe(responseTimeInMs)
  next()
})

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

// Graceful shutdown
process.on('SIGTERM', () => {
  clearInterval(metricsInterval)

  server.close(err => {
    if (err) {
      process.exit(1)
    }

    process.exit(0)
  })
})
