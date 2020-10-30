
import React, { useEffect, useState } from "react";
import axios from 'axios';

export default function AddMovie() {
    const [title, setTitle] = useState('');
    const [year, setYear] = useState('');
    const [imdbId, setimdbId] = useState('');
    const [poster, setPoster] = useState('');

    function setTitleFunction(event) {
        const titleValue = event.target.value;
        setTitle(titleValue);
    }
    function setYearFunction(event) {
        const yearValue = event.target.value;
        setYear(yearValue);
    }
    function setImdbIdFunction(event) {
        const imdbIdValue = event.target.value;
        setimdbId(imdbIdValue);
    }
    function setPosterFunction(event) {
        const posterValue = event.target.value;
        setPoster(posterValue);
    }

    const callAddMovieApi = async () => {
        const addMovie = { title, year, imdbId, poster };
        const result = await axios.post("http://localhost:5000/addMovie", addMovie).then((response) => {
            alert("Movie added succesfully");
            const { data } = result.data;
            response.send(data);

        }).catch((error) => {
            console.log("Error", error);
        });

    }
    return (
        <div className="App">
            <h1>Add movie</h1>
            <div className="container">
                <div className="form-group">
                    <input type="text" className="form-control" required onChange={setTitleFunction} placeholder="Enter Movie Title" />
                    <input type="text" className="form-control" required onChange={setYearFunction} placeholder="Enter Release Year" />
                    <input type="text" className="form-control" required onChange={setImdbIdFunction} placeholder="Enter imdb Id" />
                    <input type="text" className="form-control" required onChange={setPosterFunction} placeholder="Enter poster url" />
                    <br></br>
                    <button className="btn btn-primary mr-5" type="submit" onClick={callAddMovieApi}>ADD</button>
                </div>
            </div>
        </div>
    );
}