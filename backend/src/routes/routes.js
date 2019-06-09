import { Router } from 'express'
import { server } from '../app'
import Hello from '../models/hello'
import User from '../models/User'

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

router.post('/api/sign_in', async (req, res) => {
  const usersCount = await User.count({ name: req.body.user })
  if (usersCount === 0) {
    await User.create({
      name: req.body.user
    })
  }
  res.send(200)
})

router.get('/quit', (req, res) => {
  res.send(200)
  server.close()
})

export default router
