const express = require("express");
const Movie = require("./models/Movie");

const router = express.Router();

module.exports = function(){
    router.get('/getMovies/:searchValue', async (req, res) => {
        const { searchValue } = req.params;
        const moviesData = await Movie.find({title:searchValue});
        console.log(moviesData);
        return res.send(moviesData);
    });
    router.get('/getMovieById/:searchValue', async (req, res) => {
        const { searchValue } = req.params;
        const moviesData = await Movie.find({imdbId:searchValue});
        console.log(moviesData);
        return res.send(moviesData);
    });
    
    router.post('/addMovie', async(req,res) => {
        const {title,year,imdbId,poster} = req.body;

        const movie = new Movie({ 
            title,
            year,
            imdbId,
            poster 
        });
        await movie.save();
        res.json({message:"Movie added successfully"});
    });

    return router;
}