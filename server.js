const express = require('express')
const app = express();

app.use(express.json())

const placesRoutes = require('./routes/routes.js')
app.use('/places',placesRoutes)


app.listen(3000,()=> console.log("server has started"))