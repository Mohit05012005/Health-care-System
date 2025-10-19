const contact_model = require('../model/contact_model');
const nodemail = require('../utils/nodemailer');
module.exports.contact_us = async function(req,res){
    try{
        const user = req.body;
        const userres = await contact_model.create(user);
        const mailobj = new nodemail(user);
        await mailobj.sendMail(user.subject);
        res.status(201).json({
            status:"success",
            data:{
                user:userres
            }
        })
    }catch(err){
          console.error("Contact form submission failed:", err);
          res.status(400).json({
            status:"fail",
            message:err
          })
    }
}