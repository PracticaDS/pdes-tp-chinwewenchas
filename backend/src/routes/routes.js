import { Router } from 'express'
import { server } from '../app'
import Hello from '../models/hello'

export const HELLO_MESSAGE = 'Hola Munro!'

const router = Router()
router.get('/', (req, res) => {
  res.json({ hello: HELLO_MESSAGE })
})

router.post('/hello', async (req, res) => {
  await Hello.create({
    message: req.body.message
  })
  res.send(200)
})
router.get('/hello', async (req, res) => {
  const lala = await Hello.find({}, 'message').exec()
  res.send(lala)
})
router.get('/quit', (req, res) => {
  res.send(200)
  server.close()
})

export default router
