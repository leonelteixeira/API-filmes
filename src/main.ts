import 'newrelic'
import 'dotenv/config'
import 'reflect-metadata'
import './database/connect'

import express from 'express'

import movieRoutes from './routes/movie.routes'

const app = express()

app.use(express.json())

app.use(movieRoutes)

app.listen(process.env.SERVER_PORT, () => {
  console.log(`🚀 Server started at http://localhost:${process.env.SERVER_PORT}`)
})
