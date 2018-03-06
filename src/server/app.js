import express from 'express'
import bodyParser from 'body-parser'

import Sujets from './Database/Sujets'

const app = express()

app.use(bodyParser.json())

app.post('/register', async (req, res) => {
  const token = await Sujets.create()
  res.json({token})
} )

app.post('/answer', async (req, res) => {
  Sujets.setAnswer(req.body.token, req.body.question, req.body.answer )
} )



app.use('/', (req, res, next) => {
  res.send(`
  <html>
  <body>
    <div id="app"></div>
    <script src="/client.js"></script>
  </body>
  </html>
  `)
})

export default app