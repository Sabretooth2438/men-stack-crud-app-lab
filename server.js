// Load environment variables from .env file
require('dotenv').config();

// Constants
const express = require('express')
const mongoose = require('mongoose');

// Variables
const app = express()
const PORT = 3000

// MongoDB Connection Setup
mongoose.connect(process.env.MONGODB_URI); 

// Routes
// Home Route
app.get('/', async (req, res) => {
  res.render('index.ejs');
});

app.listen(PORT, () => {
  console.log('Server is Running')
})
