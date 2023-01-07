const http = require("http");

const express = require('express')

const app = express()

app.use('/',(req,res,next)=>{
  console.log('in the 1 middleware')
  next()
})
app.use('/user',(req,res,next)=>{
  console.log('in the 2 middleware')
  res.send("<h1>Hello from add user</h1>")
})

app.use('/',(req,res,next)=>{
  console.log('in the 3 middleware')
  res.send("<h1>Hello from express</h1>")
})

app.listen(3000)