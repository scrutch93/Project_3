const { Schema, model } = require('mongoose');

const PackageSchema = new Schema({
    tracking_number: { type: Number},trim: true, required: "Please enter in a tracking number",
    carrier: { type: String}, trim: true, 
    status_description: { type: String}, 
    
});


const Package = model ('Package', PackageSchema)

module.exports = Package