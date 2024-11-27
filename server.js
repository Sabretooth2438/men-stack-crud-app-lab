// Constants
const express = require('express')

// Variables
const app = express()
const PORT = 3000

// Middleware
app.use(express.urlencoded({extended: false}))

// Routes
app.get('/test',(req,res)=>{
  res.send('Server is running')
})

app.listen(PORT, ()=>{
  console.log('Server is Running');
  
})