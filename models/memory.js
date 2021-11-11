import mongoose from 'mongoose'
const Schema = mongoose.Schema

const memorySchema = new mongoose.Schema({
  when: Date,
  narrative: String,
  author: {type: Schema.Types.ObjectId, ref: "Profile"}
}, {
  timestamps: true
})

const Memory = mongoose.model('Memory', memorySchema)

export {
  Memory
}