/*
firstName
lastName
address
city
province
sin
email
passwordHash
*/
'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TaskSchema = new Schema({
  firstName: {
    type: String,
    required: 'please enter first name'
  },
  lastName: {
    type: String,
    required: 'please enter last name'
  },
  address: {
    type:String,
    required: 'please enter address'
  },
  city: {
    type: String,
    required: 'please enter City',
  },
  province: {
    type: Number,
    required: 'please enter province',
  },
  sin: {
    type: Number,
    required: 'please enter sin number'
  },
  email: {
    type: Number,
    required: 'please enter email'
  },
  wage: {
    type: Number
  },
  passwordHash: {
    type:String,
    required: 'enter password'
  }
});

module.exports = mongoose.model('Users', UserSchema);
