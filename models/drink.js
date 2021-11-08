import mongoose from 'mongoose'
const Schema = mongoose.Schema

const drinkSchema = new mongoose.Schema({
  name: String,
  size: {
    type: String,
    enum: ['Small', 'Medium', 'Large'],
    default: 'Medium'
  },
  iced: {
    type: Boolean,
    default: false
  },
  brew: {
    type: String,
    enum: ['Coffee', 'Cold Brew', 'Espresso', 'Chai Tea'],
  },
  addShot: {
    type: Boolean,
    default: false,
  },
  flavor: {
    type: String,
    enum: ['None','Vanilla', 'Mocha', 'White Chocolate', 'Caramel', 'Hazelnut', 'Pumpkin Spice', 'Simple Syrup'],
  },
  milk: {
    type: String,
    enum: ['None', 'Whole Milk', 'Skim Milk', 'Creamer'],
  },
  whippedCream: {
    type: Boolean,
    default: true,
  },
  drizzle: String,
  creator: {
    type: Schema.Types.ObjectId, ref: 'Profile'
  },
  lovers:[{
    type: Schema.Types.ObjectId, ref: 'Profile'
  }]
})

const Drink = mongoose.model('Drink', drinkSchema)

export {
  Drink
}