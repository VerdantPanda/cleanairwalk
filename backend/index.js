
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
const Pollutant = require('./models/pollutant');
const axios = require('axios');
const network = require("./network");

//connect to mongodb
// const dbURI = 'mongodb+srv://husseinfk:cleanairwalk@cluster0.wqacm.mongodb.net/cleanairwalkdb?retryWrites=true&w=majority';
// mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });
// const { connection } = mongoose;
// connection.once('open', () => {
//   console.log('MongoDB database connection established successfully');
// });


app.get('/', async (req, res) => {
    // const popcorn = initMap();
    // const a = await network.getGoogleRoutes();
    const c = await network.getTreesInPath("Mount Peace Cemetary Philadelphia", "Liberty Bell")
    const b = await network.getTreeData(40.05864596731028, -75.36192699094755,39.81693102473079, -74.89463170303289);
    // This endpoint is mostly for testing stuff
  res.send("hello ibrahim")
});

app.get('/route', async (req, res) => {
  const { start, end, maxTime, transportType, pollutionTolerance } = req.body;
  // mongodb call to get the polluntants list.
  // calculate polluntant score
  
  // calculate tree score
  // tollerance logic
  // send back to front end as a JSON
  res.send("hello ibrahim")
});


app.post('/pollutant', (req, res) => {
  const pollutant = new Pollutant({
      type: req.body.type,
      coordinates: [req.body.lat, req.body.long],
      description: req.body.description
  });
  pollutant.save()
      .then((result) => {
          console.log("saved aggravator pollutant")
      })
      .catch((err) => { 
          console.log(err);
      });
});



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});



// function initMap() {
//     const map = new google.maps.Map(document.getElementById("map"), {
//       zoom: 13,
//       center: { lat: 34.04924594193164, lng: -118.24104309082031 },
//     });
//     const trafficLayer = new google.maps.TrafficLayer();
  
//     trafficLayer.setMap(map);
//   }

