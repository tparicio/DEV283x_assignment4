const mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/assignment4', {useMongoClient: true})

const account_schema = {
    name : String,
    balance : Number,
}
// define Account model and Schema
const Account = mongoose.model('Account', account_schema)


module.exports = Account