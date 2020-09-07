import mongoose from 'mongoose'

const TweetsSchema = mongoose.Schema({
  title: String,
  content: String
})

//collection inside the database
export default mongoose.model('Tweets', TweetsSchema)
