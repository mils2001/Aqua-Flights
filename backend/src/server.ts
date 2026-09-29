import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

app.get('/', (_req, res) => {
  res.json({
    message: 'Aqua Flights API is running',
    status: 'success',
  })
})

app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    message: 'Aqua Flights backend is healthy',
  })
})

app.listen(PORT, () => {
  console.log(`Aqua Flights API running on http://localhost:${PORT}`)
})
