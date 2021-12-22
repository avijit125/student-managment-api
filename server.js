require('dotenv').config()
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

// initialized app
const app = express()

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cors())

const PORT = process.env.PORT || 3000

// initialized server
app.listen(PORT, ()=> console.log(`server running on ${PORT}`))