const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    actor: {
        type:String
    },
    watched: {
        type: Boolean,
        required: true,
        default: false
    
    },
    rating: {
        type: String,
        required: true,
        default: "unrated"
        
    }
})
const Movie = mongoose.model("Movie", movieSchema)

module.exports ={
    Movie
}