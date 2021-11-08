import mongoose from 'mongoose'
const Schema = mongoose.Schema

const profileSchema = new mongoose.Schema({
  name: String,
  avatar: String,
  myFavs: [{type: Schema.Types.ObjectId, ref: "Drink"}]
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}