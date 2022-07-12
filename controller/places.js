const places = require('../model/places')

const createPlace = async (req, res) => {
    const Places = new places({
        title: req.body.title,
        attraction: req.body.attraction,
        type: req.body.type,
        description: req.body.description,
        best_time: req.body.best_time,
        nearest_airport: req.body.nearest_airport,
        destination: req.body.destination,
    })
    try {
        const newPlaces = await Places.save()
        res.status(201).json(newPlaces);
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}
const getPlace = async (req, res) => {
    res.json("get one place")
}

const getAllPlaces = async (req, res) => {
    try{
        const Places = await places.find()
        res.json(Places);
    }
    catch(err)
    {
        res.status(500).json({message:err.message})
    }
}

const updatePlace = async (req, res) => {
    res.json("get one place")
}

const deletePlace = async (req, res) => {
    res.json("get one place")
}

module.exports = { createPlace, getAllPlaces, getPlace, updatePlace, deletePlace }