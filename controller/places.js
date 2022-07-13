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
    res.json(res.places_1)
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
    //let place2 = res.places_1
    //console.log(place2[0].title)
    try{
       // console.log('delete try'+res.places_1.title)
        await res.places_1[0].remove()
        //await places.findByIdAndDelete(res.places_1[0].id)
        res.status(200).json('place removed')
    }
    catch(err){
        res.status(500).json({ message: err.message})
    }
}

async function getPlacesbyID(req,res,next){
    const {id} = req.params;
    let places_1;
    try{
        places_1 = await places.find({_id:id})
        if(!places_1)
        {
            res.json('no place found')
        }
    }
    catch(err){
        res.status(400).json(err)
    }
    res.places_1=places_1;
    
    next()
}


module.exports = { createPlace, getAllPlaces, getPlace, updatePlace, deletePlace,getPlacesbyID }