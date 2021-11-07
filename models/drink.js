import mongoose from 'mongoose'
const Schema = mongoose.Schema

const drinkSchema = new mongoose.Schema({
  name: String,
  size: {
    type: Number,
    enum: [12, 16, 24],
    default: 16
  },
  iced: {
    type: Boolean,
    default: false
  },
  brew: {
    type: String,
    enum: ['Espresso', 'Cold Brew', 'Coffee', 'Chai Tea'],
  },
  addShot: {
    type: Boolean,
    default: false,
  },
  flavor: {
    type: String,
    enum: ['Vanilla', 'Mocha', 'White Chocolate', 'Caramel', 'Hazelnut', 'Simple Syrup'],
  },
  milk: {
    type: String,
    enum: ['Whole Milk', 'Skim Milk', 'Creamer'],
  },
  whippedCream: {
    type: Boolean,
    default: true,
  },
  brew: {
    type: String,
    enum: ['Espresso', 'Cold Brew', 'Coffee', 'Chai Tea'],
  },
  creator:{
    type: Schema.Types.ObjectId, ref: 'Profile'
  },
  lovers:[{
    type: Schema.Types.ObjectId, ref: 'Profile'
  }]
})

const Drink = mongoose.model('Drink', profileSchema)

export {
  Drink
}