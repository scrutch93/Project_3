const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: { type: String, trim: true, required: "Please enter a username"},
    password: { type: String, trim: true, minlength: 6,required: "Password must contain at least 6 characters"},
    email: { type: String, unique: true, match: [/.+@.+\..+/, "Wuh-oh! That email address is not valid"]},
    
});




const User= mongoose.model("User", UserSchema);


module.exports = User;