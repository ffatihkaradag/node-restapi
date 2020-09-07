import express from 'express'
import Tweets from './Tweets.js'

const router = express.Router()

//get tweets
router.get('/tweets', (req, res) => {
  Tweets.find({}, (err, data) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.status(200).send(data)
    }
  })
})

// create new tweet
router.post('/tweet', async (req, res) => {
  const tweet = new Tweets({
    title: req.body.title,
    content: req.body.content
  })
  await tweet.save()
  res.send(tweet)
})

// get single tweet
router.get('/tweet/:id', async (req, res) => {
  try {
    const tweet = await Tweets.findOne({ _id: req.params.id })
    res.send(tweet)
  } catch {
    res.status(404)
    res.send({ error: "tweet doesn't exist!" })
  }
})

// update tweet
router.patch('/tweet/:id', async (req, res) => {
  try {
    const tweet = await Tweets.findOne({ _id: req.params.id })

    if (req.body.title) {
      tweet.title = req.body.title
    }

    if (req.body.content) {
      tweet.content = req.body.content
    }

    await tweet.save()
    res.send(tweet)
  } catch {
    res.status(404)
    res.send({ error: "tweet doesn't exist!" })
  }
})

// delete tweet
router.delete('/tweet/:id', async (req, res) => {
  try {
    await Tweets.deleteOne({ _id: req.params.id })
    res.status(204).send()
  } catch {
    res.status(404)
    res.send({ error: "tweet doesn't exist!" })
  }
})

export default router
