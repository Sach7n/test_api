const mongoose = require('mongoose')
//require('dotenv').config();

const connectDB = (url) => {
  
//mongoose.connect(process.env.db_url)
mongoose.connect('mongodb://localhost/test_api')
const db = mongoose.connection
db.on('error',(error)=> console.error(error))
db.once('open',()=> console.log('connected to database'))

}

module.exports = connectDB