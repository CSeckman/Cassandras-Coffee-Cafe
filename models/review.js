import mongoose from 'mongoose'
const Schema = mongoose.Schema

const reviewSchema = new mongoose.Schema({

}, {
  timestamps: true
})

const Review = mongoose.model('Review', reviewSchema)

export {
  Review
}