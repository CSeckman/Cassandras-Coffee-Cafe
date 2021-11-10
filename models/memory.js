import mongoose from 'mongoose'
const Schema = mongoose.Schema

const memorySchema = new mongoose.Schema({
  when: Date,
  narrative: String
}, {
  timestamps: true
})

const Memory = mongoose.model('Memory', memorySchema)

export {
  Memory
}