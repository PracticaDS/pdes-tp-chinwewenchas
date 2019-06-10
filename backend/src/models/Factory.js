import mongoose from 'mongoose'

const factorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  size: { type: Number, required: true },
  board: { type: Object, required: true },
  _user: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
})

const Factory = mongoose.model('Factory', factorySchema)

export default Factory
