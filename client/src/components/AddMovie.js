
import React, { useEffect, useState } from "react";
import axios from 'axios';

export default function AddMovie() {
    const [formValues,setFormValues]=useState({});

    function onChangeField(event){
        const {name,value}=event.target;
        setFormValues({
            ...formValues,
            [name]:value
        })
    }

    const callAddMovieApi = async () => {
        const result = await axios.post("http://localhost:5000/addMovie", formValues).then((response) => {
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
                    <input type="text" className="form-control" name="title" required onChange={onChangeField} placeholder="Enter Movie Title" />
                    <input type="text" className="form-control" name="year" required onChange={onChangeField} placeholder="Enter Release Year" />
                    <input type="text" className="form-control" name="imdbId" required onChange={onChangeField} placeholder="Enter imdb Id" />
                    <input type="text" className="form-control" name="poster" required onChange={onChangeField} placeholder="Enter poster url" />
                    <br></br>
                    <button className="btn btn-primary mr-5" type="submit" onClick={callAddMovieApi}>ADD</button>
                </div>
            </div>
        </div>
    );
}