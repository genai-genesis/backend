//use mongoose to create user model

const mongoose = require ('mongoose');
const {Schema} = mongoose;

const UserSchema = new Schema({
    id: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    name: {type: String, required: true},
    password: {type: String, required: true},
})

const User = mongoose.model('User', UserSchema);
module.exports = User;