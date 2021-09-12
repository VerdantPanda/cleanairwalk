const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pollutantSchema = new Schema ({
    type: {
        type: String,
        required: true
    },
    coordinates: {
        type: [Number],
        required: true
    }, 
    description: {
        type : String,
        required: false
    }
}, { timestamps: true})

const Pollutant = mongoose.model('Pollutant', pollutantSchema);
module.exports = Pollutant;
