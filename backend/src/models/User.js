import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  name: { type: String, unique: true, required: true },
  factories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Factory' }]
})

const User = mongoose.model('User', userSchema)

export default User
