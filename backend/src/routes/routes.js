import { Router } from 'express'
import { server } from '../app'
import Hello from '../models/hello'
import User from '../models/User'
import Factory from '../models/Factory'

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

router.post('/api/new_factory', async (req, res) => {
  const user = await User.findOne({ name: req.body.user })
  let userFactory = await Factory.find({ _user: user._id, name: req.body.name })

  if (userFactory.length === 0) {
    const factory = await new Factory({
      name: req.body.name,
      size: req.body.size,
      board: req.body.board,
      _user: user
    })
    user.factories.push(factory)
    await factory.save()
    await user.save()
    res.send(factory)
  } else {
    res.send(userFactory)
  }
})

router.post('/api/save', async (req, res) => {
  const factory = await Factory.findById(req.body.id)
  factory.board = req.body.board
  factory.save()

  res.send(200)
})

router.get('/quit', (req, res) => {
  res.send(200)
  server.close()
})

export default router
