const axios = require('axios');

function getTreeData(latMin, latMax, longMin, longMAx){
    // https://services.arcgis.com/fLeGjb7u4uXqeF9q/arcgis/rest/services/PPR_StreetTrees/FeatureServer/0/query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=*&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=JSON&f=html&token=
    axios.get('https://services.arcgis.com/fLeGjb7u4uXqeF9q/arcgis/rest/services/PPR_StreetTrees/FeatureServer/0/query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=*&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pgeojson&token=')
    .then((res) => res.json())
    .then((res1) => console.log(res1));
}

function getPollutants(){
    // Bing data
}

function getUserAggravators(){
    // Stuff from MOngoDB
}

async function getGoogleRoutes(st, ed){
    let start = st ?? 'University of Pennsylvania';
    let end = ed ?? 'Temple University';
    let param = {origin: start, destination : ed, alternatives: 'true', key: 'AIzaSyB0RgvtIWMPCWwaaACCNYe2PKhY82YeOL0', travelMode : 'WALKING'}
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
    return ret;
}

module.exports = {getGoogleRoutes};
