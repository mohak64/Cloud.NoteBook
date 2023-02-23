const mongoose = require("mongoose");

const UserSchema = new Schema({
    name: {
        type: String, 
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    }, 
    password: {
        type: String,
        required: true
    }, 
    date: {
        type: date,
        default: Date.now
    }, 
    
  });

  module.exports = mongoose.model('user', UserSchema);