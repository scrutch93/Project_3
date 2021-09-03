const express = require (express)
const User = require('../model/user')

mongoose.connect ('mongodb://localhost:27017/login-app-db/login-app-db', {
    useNewUrlParser: true, 
    useUnifiedTopology: true 

});