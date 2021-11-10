import mongoose from 'mongoose'
const Schema = mongoose.Schema

const memorySchema = new mongoose.Schema({

}, {
  timestamps: true
})

const Memory = mongoose.model('Memory', memorySchema)

export {
  Memory
}