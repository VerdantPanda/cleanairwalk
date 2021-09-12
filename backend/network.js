const axios = require('axios');

async function getTreeData(x1, y1, x2, y2){
    // https://services.arcgis.com/fLeGjb7u4uXqeF9q/arcgis/rest/services/PPR_StreetTrees/FeatureServer/0/query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=*&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=JSON&f=html&token=
    const res = await axios.get('https://services.arcgis.com/fLeGjb7u4uXqeF9q/arcgis/rest/services/PPR_StreetTrees/FeatureServer/0/query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=*&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pgeojson&token=');
    //console.log('cat dog')
    // var array = [];
    var features = res.data.features;
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

module.exports = {getGoogleRoutes, getTreeData};
