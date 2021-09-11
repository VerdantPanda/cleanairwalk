const express = require('express');
const mongoose = require('mongoose');
const app = express();

//connect to mongodb
const dbURI = 'mongodb+srv://husseinfk:cleanairwalk@cluster0.wqacm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(dbURI);

function getTreeData(){
}

function getPollutants(){
    
}

function getFastestRoute(start, end){
}

function getUserAggravators(){
}