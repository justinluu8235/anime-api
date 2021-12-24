//our first collection schema
const mongoose = require('mongoose');

//Defining the schema 
const seasonSchema = new mongoose.Schema({
    url: String,
    title: {type:String, required: true},
    image_url: String, 
    synopsis:String,
})

//name the model
const Season = mongoose.model("Season", seasonSchema);

module.exports = Season;