const { Schema, model } = require('mongoose');


const UserSchema = new Schema({
    username: { type: String, trim: true, required: "Please enter a username"},
    password: { type: String, trim: true },
    email: { type: String, unique: true, match: [/.+@.+\..+/, "Wuh-oh! That email address is not valid"]},
    packages: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Package'
        }, 
      ],  
});

UserSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
  });
  
  // compare the incoming password with the hashed password
  UserSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
  };



const User= model("User", UserSchema);


module.exports = User;