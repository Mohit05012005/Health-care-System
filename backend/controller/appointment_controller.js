const express = require('express');
const appointment_model = require('../model/appointment_model');
const nodemail = require('../utils/nodemailer');
const Appointment = require('../model/appointment_model');
module.exports.userAppointment = async function(req,res){
    try{
        const user = req.body;
       const userres = await appointment_model.create(user);
         mailObj = new nodemail(user);
        await mailObj.sendMail("Appointment Confirmation");
       res.status(201).json({
        status:"success",
        data:{
           user: userres
        }
       })
    }catch(err){
         console.error("Appointment creation failed:", err);
         res.status(400).json({
            status:"fail",
            message:err
         })
    }

}


