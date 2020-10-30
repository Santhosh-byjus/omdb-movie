const express= require('express');
const cors = require('cors');
const bodyParser= require('body-parser');
require('dotenv').config();
const MongoClient = require('mongodb').MongoClient

const app=express()
app.use(cors())
const port=5000;

const uri = process.env.MONGODB_URI;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const connectDatabase = async (req,res,next) => {
  const client = await MongoClient.connect(uri);
  const db = client.db("imdb")
  const collection = db.collection("movies");
  app.locals.collection=collection;
//   global.nativeClient =client;
//   return "Database connected"
//   next()
//   const db = client.db("imdb")
//   const collection = db.collection("movies");
//   console.log("ccc");
}
connectDatabase();
app.get('/',(req,res)=>{
    const collection=req.app.locals.collection;
    collection.find({}).toArray().then(response=>console.log(response));
    res.send("dd");
})
app.listen(port,()=>{console.log("connected to server");})