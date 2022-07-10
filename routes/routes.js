const express = require('express')
const router = express.Router()
const {createPlace,getAllPlaces,getPlace,updatePlace,deletePlace} = require('../controller/places')


router.route('/:id').get(getPlace).patch(updatePlace).delete(deletePlace)

router.route('/').get(getAllPlaces).post(createPlace)


module.exports = router