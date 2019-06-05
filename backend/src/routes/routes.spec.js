import '@babel/polyfill'
import request from 'supertest'
import app, { server } from '../app'
import { HELLO_MESSAGE } from './routes'

describe('API', () => {
  afterAll(async () => {
    await server.close()
  })
  it('requesting / gives a hello', async () => {
    const response = await request(app).get('/')
    expect(response.statusCode).toBe(200)
    expect(response.body).toEqual({ hello: HELLO_MESSAGE })
  })
})
