const axios = require('axios');

function getTreeData(latMin, latMax, longMin, longMAx){
    // https://services.arcgis.com/fLeGjb7u4uXqeF9q/arcgis/rest/services/PPR_StreetTrees/FeatureServer/0/query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=*&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=JSON&f=html&token=
}

function getPollutants(){
}

function getFastestRoute(start, end){
}

function getUserAggravators(){
}

async function getGoogleRoutes(st, ed){
    let start = st ?? 'University of Pennsylvania';
    let end = ed ?? 'Drexel University';
    let param = {origin: start, destination : ed, alternatives: 'true', key: 'AIzaSyB0RgvtIWMPCWwaaACCNYe2PKhY82YeOL0', travelMode : 'WALKING'}
    let toURL = new URLSearchParams(param).toString()
    let ret = await axios.get('https://maps.googleapis.com/maps/api/directions/json?' + toURL);

    console.log('\n\n\n\n\n\n________')
    console.log(ret.data.routes[0].legs);

    return ret;
}

module.exports = {getGoogleRoutes};
