const mongoose = require ('mongoose')

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },

    password: { type: String, required: true }
    trackingNumber: { type: id, required: false}

   
  

{ collection: 'users' }
)

const model = mongoose.model('UserSchema', UserSchema)


module.exports =model