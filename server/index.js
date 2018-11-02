'use strict'

let dotenv = require('dotenv').config()
let express = require('express')

let app = express()
let options = {
  host: process.env.HOST || 'localhost',
  port: process.env.PORT || 8080
}

app.use(function(req, res) {
  res.json({
    "message": "You made a succesful call to the Yories HTTP Server"
  })
})

app.listen(options.port, function() {
  console.log(`Listening in on http://${options.host}:${options.port}/`)
})