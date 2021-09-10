const express = require("express");
<<<<<<< HEAD
const routes = require("./routes/api")
=======
>>>>>>> 33e0f75930d94060286f04a55a421a023a485e42

const PORT = process.env.PORT || 8000;

const mongoose = require("mongoose")

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
require('dotenv').config();
const User = require('./models/User')

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/user", {
  useNewUrlParser: true
})

require("./routes/apiRoutes.js")(app);
require("./routes/htmlRoutes.js")(app);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});




// const express = require (express)
// const User = require('../model/user')



// ;


// require('dotenv').config();
// const User = require('../models/User')

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
//   useNewUrlParser: true
// })

// .then(() => {
//     console.log("DB Connected");
// })
// .catch((err) => console.log (err));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});


