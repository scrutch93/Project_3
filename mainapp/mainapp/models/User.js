const { Schema, model } = require('mongoose');


const UserSchema = new Schema({
    username: { type: String, trim: true, required: "Please enter a username"},
    password: { type: String, trim: true, [(value) => {return value.length >=6}]: "Password must contain at least 6 characters"},
    email: { type: String, unique: true, match: [/.+@.+\..+/, "Wuh-oh! That email address is not valid"]},
    
});




const User = model('UserSchema', UserSchema)


module.exports = User;