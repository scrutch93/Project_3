const express = require ("express");
const mongoose = require ("mongoose");



require('dotenv').config();
const User = require('../models/User')

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true
})

.then(() => {
    console.log("DB Connected");
})
.catch((err) => console.log (err));



