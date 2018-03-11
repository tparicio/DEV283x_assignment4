const express = require('express')
const mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/assignment4', {useMongoClient: true})

/*
 * instiate express framework
 */ 
let app = express()

/*
 * get routes
 */
let routes = require('./routes/routes')

routes(app)

app.use((req, res, next) => {
    console.log(req.params, req.query)
})

/*
 * init express framework on port 3000
 */ 
app.listen(3000)