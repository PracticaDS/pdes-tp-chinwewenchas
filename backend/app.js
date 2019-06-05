import express from 'express'
import morgan from 'morgan'
import router from './routes/routes'

const app = express();
const isProduction = process.env.NODE_ENV === 'production'
const port = isProduction ? process.env.PORT : 3001

app.use(morgan('dev'))
app.use('/', router)

export const server = app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
export default app
