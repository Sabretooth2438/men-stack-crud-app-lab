// Load environment variables
require('dotenv').config()

// Import modules
const express = require('express')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const path = require('path');

// Initialize app
const app = express()
const PORT = 3000

// Middleware
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))
app.use(express.static(path.join(__dirname, 'public')));

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
mongoose.connection.on('connected', () =>
  console.log(`Connected to MongoDB: ${mongoose.connection.name}`)
)

// Routes
app.get('/', (req, res) => res.render('index.ejs'))
const catCtrl = require('./controllers/cats')
app.use('/', catCtrl)

// Start server
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
