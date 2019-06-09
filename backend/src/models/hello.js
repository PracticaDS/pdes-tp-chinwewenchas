import mongoose from 'mongoose'

const helloSchema = new mongoose.Schema({
  message: String
})

const Hello = mongoose.model('Hello', helloSchema)

export default Hello
