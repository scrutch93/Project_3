const express = require (express)
const User = require('../model/user')



});


require('dotenv').config();
const User = require('../models/User')

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true
})

.then(() => {
    console.log("DB Connected");
})
.catch((err) => console.log (err));



