const express = require('express');
const cors = require('cors');
const { isEmpty } = require('lodash');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();


const app = express()
const port = 5000;

const uri = process.env.MONGODB_URI;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const connectDatabase = async (req, res, next) => {
    try {
        const client = await MongoClient.connect(uri);

        if (isEmpty(client)) {
            return res.send("Database not connected");
        }
        global.nativeClient = client;
        console.log("Database Connected");
        next();
    }
    catch (error) {
        return res.send("Database not connected");
    }
}

app.use(cors());
app.use(connectDatabase);

app.get('/:searchValue', async (req, res) => {
    const { searchValue } = req.params;
    const moviesCollection = nativeClient.db("imdb").collection("movies");
    const moviesData = await moviesCollection.find({ title: searchValue }).toArray();
    return res.send(moviesData);
})

app.listen(port, () => { console.log("connected to server"); })