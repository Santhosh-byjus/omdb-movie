const mongoose = require("mongoose");

const Movie = mongoose.model('Movie', {
     title: String,
     year : String,
     imdbId : String,
     poster : String  
});

module.exports = Movie;