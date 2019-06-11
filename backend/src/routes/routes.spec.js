import '@babel/polyfill'
import request from 'supertest'
import app from '../app'
import { HELLO_MESSAGE } from './routes'
import Hello from '../models/hello'
import User from '../models/User'
import Factory from '../models/Factory'

const resetDB = async () => {
  return Promise.all([Hello.remove({}), User.remove({}), Factory.remove({})])
}

describe('API', () => {
  beforeAll(async () => {
    await resetDB()
  })
  afterEach(async () => {
    await resetDB()
  })
  it('requesting / gives a hello', async () => {
    const response = await request(app).get('/')
    expect(response.statusCode).toBe(200)
    expect(response.body).toEqual({ hello: HELLO_MESSAGE })
  })
  describe('/hello path', () => {
    it('with empty hello messages returns empty array', async () => {
      const response = await request(app).get('/hello')
      expect(response.statusCode).toBe(200)
      expect(response.body).toEqual([])
    })
    it('create a hello message', async () => {
      const create = await request(app).post('/hello', { message: 'holes' })
      expect(create.statusCode).toBe(200)
    })
    it('with some hello messages returns array with the messages', async () => {
      const expectedMessages = ['holes', 'holu', 'holiiis']
      await request(app)
        .post('/hello')
        .send({ message: expectedMessages[0] })
      await request(app)
        .post('/hello')
        .send({ message: expectedMessages[1] })
      await request(app)
        .post('/hello')
        .send({ message: expectedMessages[2] })

      const response = await request(app).get('/hello')
      const messages = response.body.map(message => message.message)
      expect(messages).toEqual(expectedMessages)
    })
  })
  describe('/sign_in path', () => {
    it('creates a user if not exists', async () => {
      const agus = 'agus'
      const response = await request(app)
        .post('/api/sign_in')
        .send({ user: agus })
      const users = await User.find({})

      expect(response.statusCode).toBe(200)
      expect(users.length).toBe(1)
      expect(users[0].name).toBe(agus)
    })
    it('does not creates a user if not exists', async () => {
      const agus = 'agus'
      await request(app)
        .post('/api/sign_in')
        .send({ user: agus })
      const response = await request(app)
        .post('/api/sign_in')
        .send({ user: agus })
      const users = await User.find({})

      expect(response.statusCode).toBe(200)
      expect(users.length).toBe(1)
      expect(users[0].name).toBe(agus)
    })
  })
  describe('/new_factory path', () => {
    const agus = 'agus'
    beforeEach(async () => {
      await request(app)
        .post('/api/sign_in')
        .send({ user: agus })
    })
    it('creates a factory if not exists', async () => {
      const name = 'nueva fabrica'
      const size = 10
      const response = await request(app)
        .post('/api/new_factory')
        .send({
          name: name,
          size: size,
          board: {},
          user: agus
        })

      expect(response.statusCode).toBe(200)
      expect(response.body.name).toBe(name)
      expect(response.body.size).toBe(size)
    })
    it('returns the existent factory if exists', async () => {
      const name = 'nueva fabrica'
      const size = 10
      await request(app)
        .post('/api/new_factory')
        .send({
          name: name,
          size: size,
          board: {},
          user: agus
        })

      await request(app)
        .post('/api/new_factory')
        .send({
          name: name,
          size: size,
          board: {},
          user: agus
        })

      const user = await User.findOne({ name: agus })
      const factories = await Factory.find({ _user: user._id })

      expect(factories.length).toBe(1)
      expect(factories[0].name).toBe(name)
      expect(factories[0].size).toBe(size)
    })
    it('creates the factory for the user', async () => {
      const name = 'nueva fabrica'
      const size = 10
      await request(app)
        .post('/api/new_factory')
        .send({
          name: name,
          size: size,
          board: {},
          user: agus
        })

      const user = await User.findOne({ name: agus }).populate('factories')

      expect(user.factories.length).toBe(1)
      expect(user.factories[0].name).toBe(name)
      expect(user.factories[0].size).toBe(size)
    })
  })
  describe('/save path', () => {
    const agus = 'agus'
    let factory

    beforeEach(async () => {
      await request(app)
        .post('/api/sign_in')
        .send({ user: agus })

      await request(app)
        .post('/api/new_factory')
        .send({
          name: 'pepe',
          size: 10,
          board: {},
          user: agus
        })

      factory = await Factory.findOne({ name: 'pepe' })
    })

    it('saves the new board factory', async () => {
      const newBoard = { holis: 'munro' }
      const response = await request(app)
        .post('/api/save')
        .send({
          id: factory.id,
          board: newBoard
        })

      const newFactory = await Factory.findById(factory.id)

      expect(response.statusCode).toBe(200)
      expect(factory.board).not.toEqual(newBoard)
      expect(newFactory.board).toEqual(newBoard)
    })
  })
  describe('/factories', () => {
    let agus
    let pepe
    let agusFactory1
    let agusFactory2

    beforeEach(async () => {
      agus = await User.create({ name: 'agus' })
      pepe = await User.create({ name: 'pepe' })
      await request(app)
        .post('/api/new_factory')
        .send({
          name: 'agus factory 1',
          size: 10,
          board: {},
          user: agus.name
        })

      await request(app)
        .post('/api/new_factory')
        .send({
          name: 'agus factory 2',
          size: 20,
          board: {},
          user: agus.name
        })

      await request(app)
        .post('/api/new_factory')
        .send({
          name: 'pepe factory',
          size: 20,
          board: {},
          user: pepe.name
        })

      agusFactory1 = await Factory.findOne({
        _user: agus._id,
        name: 'agus factory 1'
      })
      agusFactory2 = await Factory.findOne({
        _user: agus._id,
        name: 'agus factory 2'
      })
    })

    it('returns all the user factories', async () => {
      const response = await request(app)
        .get('/api/factories')
        .query({ user: agus.name })

      expect(response.statusCode).toBe(200)
      expect(response.body.length).toBe(2)
      expect(response.body.map(f => f._id)).toEqual([
        agusFactory1._id.toString(),
        agusFactory2._id.toString()
      ])
    })
  })
})
