const { Schema, model } = require('mongoose');


const UserSchema = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String,unique: true, match: [/.+@.+\..+/, "Please enter a valid e-mail address"]},
    numberOfpackages: { type: Number, required: false},
    package: { type: string, 

}
{ collection: 'users' }
)

const User = model('UserSchema', UserSchema)


module.exports = User;