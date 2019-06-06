import express from 'express'
import morgan from 'morgan'
import router from './routes/routes'
import { connectDb } from './databaseConnection'

require('dotenv').config()

const app = express()
app.use(morgan('dev'))
app.use('/', router)

const conection = connectDb(process.env.MONGO_URL).then(() => {
  const port = process.env.PORT
  return app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Server running on port ${port}`)
  })
})
export const server = {
  close: () => conection.then(server => server.close())
}

export default app
