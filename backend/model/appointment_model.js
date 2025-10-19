const mongoose = require('mongoose');


const appointmentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    disease:{
        type: String,
        required: true
    },
    doctor:{
        type:String,
        required:true
    },
    date:{
        type: String,
        required: true
    },
    time:{
        type:String,
        required:true
    },
    phone:{
        type:Number
    },
    message:{
           type:String
    },
    department:{
        type:String
    }
})

const appointmentModel = mongoose.model('USER_APPOINTMENT',appointmentSchema);
module.exports = appointmentModel;
