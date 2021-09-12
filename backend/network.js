const axios = require('axios');
const fs = require('fs');


async function getTreeData(x1, y1, x2, y2){
    // https://services.arcgis.com/fLeGjb7u4uXqeF9q/arcgis/rest/services/PPR_StreetTrees/FeatureServer/0/query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=*&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=JSON&f=html&token=
    const jsonFile = fs.readFileSync('PPR_StreetTrees.json');
    let res = JSON.parse(jsonFile);

    //console.log('cat dog')
    // var array = [];
    var features = res.features;
    var result = [];
    var bigX = Math.max(x1, x2);
    var bigY = Math.max(y1, y2);
    var smallX = Math.min(x1, x2);
    var smallY = Math.min(y1,y2);
    var count = 0;
    
    //result.push([smallX, bigY]);
    //console.log(features[0].geometry.coordinates);
    features.forEach(async function(tree) {
        var pos = tree.geometry.coordinates;
        

        if(pos[1] >= smallX && pos[1] <= bigX && pos[0] >= smallY && pos[0] <= bigY) {
            
            result.push(pos);
            count = count + 1;
           
        }
    });
        
    return result;
}

function getPollutants(){
    // Bing data
}

function getUserAggravators(){
    // Stuff from MOngoDB
}

async function getGoogleRoutes(st, ed){
    let start = st;
    let end = ed;
    let param = {origin: start, destination : end, alternatives: 'true', key: 'AIzaSyB0RgvtIWMPCWwaaACCNYe2PKhY82YeOL0', travelMode : 'WALKING'}
    let toURL = new URLSearchParams(param).toString()
    let ret = await axios.get('https://maps.googleapis.com/maps/api/directions/json?' + toURL);
    let routes = ret.data.routes.map((route) => route.legs[0]);
    /*
    distance: { text: '99.6 mi', value: 160361 },
    duration: { text: '1 hour 51 mins', value: 6684 },
    end_address: '224 Mulberry St, New York, NY 10012, USA',
    end_location: { lat: 40.722348, lng: -73.9961201 },
    start_address: 'Philadelphia, PA 19104, USA',
    start_location: { lat: 39.9476279, lng: -75.1878833 },
    steps: [
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object]
    ],
    traffic_speed_entry: [],
    via_waypoint: []
    */

    // console.log(routes)

    return routes;
}

async function getTreesInPath(st, ed) {
    let routes = await getGoogleRoutes(st, ed)
    let routesToScoreMap = []
    // console.log('Size: ' + routes.length)

    for (var route of routes) {
        let routeSteps = route['steps']
        // console.log(route)
        let totalTrees = 0
        for (var step of routeSteps) {
            let treeData = await getTreeData(step['start_location']['lat'], step['start_location']['lng'], step['end_location']['lat'], step['end_location']['lng'])
            totalTrees += treeData.length
        }

        routesToScoreMap.push([totalTrees, route]) 
    }
    
    console.log(routesToScoreMap)

    return routesToScoreMap
}

module.exports = {getGoogleRoutes, getTreeData, getTreesInPath};
