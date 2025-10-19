const mongoose = require('mongoose');

const contact_schema = new mongoose.Schema({
      name:{
        type:String,
        required:true
      },
      email:{
        type:String,
        required:true
      },
      subject:{
        type:String,
        required:true
      },
      message:{
        type:String,
        required:true
      }
});

const contact_model = mongoose.model('CONTACT_US',contact_schema);

module.exports = contact_model;