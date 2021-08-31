const express = require 

require('dotenv').config();
const User = require('../model/user')

mongoose.connect (process.env.MONGODB_URI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
.then(() => {
    console.log("DB Connected");
})
.catch((err) => console.log (err));



