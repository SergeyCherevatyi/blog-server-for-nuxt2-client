const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const passport = require('passport')
const cors = require('cors')


const authRoutes = require('./routes/auth.routes')
const postRoutes = require('./routes/post.routes')
const commentRoutes = require('./routes/comment.routes')

const passportStrategy = require('./middleware/passport-strategy')
const keys = require('./keys')
const app = express()

mongoose.connect(keys.MONGO_URI)
  .then(() => console.log('MongoDB connected...'))
  .catch(error => console.error(error))

app.use(passport.initialize())
passport.use(passportStrategy)

app.use(cors())


app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// registration  routers
app.use('/api/auth', authRoutes)
app.use('/api/post', postRoutes)
app.use('/api/comment', commentRoutes)
// app.use('/images', express.static('static'))
app.use('/images', express.static(__dirname + '/static'))


module.exports = app
