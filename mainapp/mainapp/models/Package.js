const mongoose = require('mongoose');
const Schema = mongoose.Schema

const PackageSchema = new Schema({
    tracking_number: { type: Number,trim: true, required: "Please enter in a tracking number"},
    carrier_code: { type: String, trim: true, required: "Please select a carrier/carrier code"},
    status_description: { type: String}, 
    ship_date: {type: String},
    estimated_delivery_date: {type: String},
    actual_delivery_date: {type: String}
});


const Package = mongoose.model ('Package', PackageSchema)

module.exports = Package