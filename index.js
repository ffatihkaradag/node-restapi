import express from 'express'
import mongoose from 'mongoose'

import routes from './routes.js'
//app config
const app = express()
const port = process.env.PORT || 9000

//middlewares
app.use(express.json())
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'),
    res.setHeader('Access-Control-Allow-Headers', '*'),
    next()
})

//DB config
const connection_url =
  'mongodb+srv://admin:cWojsBYb9KoJeJnj@cluster0.0l73i.mongodb.net/tiktok?retryWrites=true&w=majority'

mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})

//api endpoints
app.use('/api', routes)

app.get('/', (req, res) => {
  res.send('Hello Worlds!')
})

//listen
app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})
