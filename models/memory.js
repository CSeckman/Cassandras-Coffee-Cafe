import mongoose from 'mongoose'
const Schema = mongoose.Schema

const memorySchema = new mongoose.Schema({
  when: Date,
  narrative: String,
  // whichDrink: {
  //   type: Schema.Types.ObjectId, ref: 'Drink'
  // }
}, {
  timestamps: true
})

const Memory = mongoose.model('Memory', memorySchema)

export {
  Memory
}