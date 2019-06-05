import { Router } from 'express'
import { server } from '../app'
export const HELLO_MESSAGE = 'Hola Munro!'

const router = Router()
router.get('/', (req, res) => {
  res.json({ hello: HELLO_MESSAGE })
})
router.get('/quit', (req, res) => {
  res.send(200)
  server.close()
})

export default router
