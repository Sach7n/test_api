const express = require('express')
const app = express();
const db = require('./db/connect')
app.use(express.json())

db();
const placesRoutes = require('./routes/routes.js')
app.use('/places',placesRoutes)


app.listen(3000,()=> console.log("server has started"))