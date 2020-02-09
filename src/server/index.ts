import Express from 'express'
import cors from 'cors'

const app = Express()

//CORS対応
app.use(cors())

//Routing

app.get('/api/health', (req, res) => {
  const data = { message: 'hello' }
  res.send(data)
})

// Routeに一致しないリスエスト
app.use((req, res, next) => {
  res.sendStatus(404)
  next({ statusCode: 404 })
})

//Express server 起動

const port = 8888
const host = 'localhost'

app.listen(port, host, () => {
  console.log(`Running on http://${host}:${port}`)
})