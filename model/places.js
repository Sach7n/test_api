const mongoose = require('mongoose')

const placesSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'Please provide title'],
            maxlength: 10,
        },
        attraction: {
            type: String,
            //enum: [Beach, Architecture, Mountains, Nature],
            required: true,
        },
        type:
        {
            type: String,
            //enum: [cruise, adventure, eco],
            required: true,
        },
        description: {
            type: String,
            required: [true, 'Please provide description'],
            maxlength: 400,
        },
        best_time: {
            type: String,
            //enum: [spring,summer,winter,monsoon],
            required: true,
        },
        nearest_airport: {
            type: String,
            required: true,
            maxlength:100,
        },
        destination:{
            type: String,
            required: true,
            maxlength:200,
        }
    }

)
module.exports = mongoose.model('places', placesSchema)