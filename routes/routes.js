const express = require('express')
const router = express.Router()
const {createPlace,getAllPlaces,getPlace,updatePlace,deletePlace,getPlacesbyID} = require('../controller/places')


router.route('/:id').get(getPlacesbyID,getPlace).patch(updatePlace).delete(getPlacesbyID,deletePlace)

router.route('/').get(getAllPlaces).post(createPlace)


module.exports = router