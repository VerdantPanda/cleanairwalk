const express = require('express');
const mongoose = require('mongoose');
const Pollutant = require('./models/pollutant');
const app = express();

//connect to mongodb
const dbURI = 'mongodb+srv://husseinfk:cleanairwalk@cluster0.wqacm.mongodb.net/cleanairwalkdb?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(result => console.log('Connected to DB'))
.catch(err => console.log(err));

const pollutant = new Pollutant({
    type: 'smokers',
    coordinates: '2.5,3.9',
    description: 'Saw 2 people smoking'
});

pollutant.save()
    .then((result) => {
        console.log(result)
    })
    .catch((err) => { 
        console.log(err);
    });





function getTreeData(){
}

function getPollutants(){
}

function getFastestRoute(start, end){
}

function getUserAggravators(){
}