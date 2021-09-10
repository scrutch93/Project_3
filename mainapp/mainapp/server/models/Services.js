const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const carrierShcema = new Schema ({
    carrierText: {
         type: String,
            
    }
})