const express = require('express')
const app = express()
const blogRouter = require('./controllers/Blogs')
const cors = require('cors')
const mongoose = require('mongoose')
const config = require('./utils/config')

mongoose.connect(config.URL)

app.use(cors())
app.use(express.json())

app.use('/api/blogs', blogRouter)

module.exports = app

