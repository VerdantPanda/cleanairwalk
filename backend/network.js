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





function getTreeData(latMin, latMax, longMin, longMAx){
    // https://services.arcgis.com/fLeGjb7u4uXqeF9q/arcgis/rest/services/PPR_StreetTrees/FeatureServer/0/query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=*&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=JSON&f=html&token=
}

function getPollutants(){
}

function getFastestRoute(start, end){
}

function getUserAggravators(){
}