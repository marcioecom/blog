const express = require("express")
const { randomBytes } = require("crypto")
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

const posts = {}

app.get('/posts', (req, res) => {
  return res.send(posts)
})

app.post('/posts', (req, res) => {
  const id = randomBytes(4).toString('hex')
  const { title } = req.body

  posts[id] = {
    id,
    title
  }

  return res.status(201).send(posts[id])
})

app.listen(3333, () => console.log("Server is running..."))
