var express = require('express')
var cors = require('cors')
var mongoRoute = require('./router/mongoRoute')

var app = express()
app.use(cors())
app.use(mongoRoute)

app.get('/', (req, res)=>{
    res.send('<h1>Tes Express ♥ MongoDB</h1>')
})

app.listen(1234, ()=>{
    console.log('Server aktif di port 1234')
})