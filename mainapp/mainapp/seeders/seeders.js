const mongoose = require('mongoose');
const db = require('.../models');

mongoose.connect('mongodb://localhost/user', {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});


const userSeed =[

    { 
        username: "johndoe",
        password: 123456,
        email: "johndoe@yahoo.com"   

        
    },

]