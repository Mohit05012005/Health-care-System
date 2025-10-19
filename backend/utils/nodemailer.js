const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();
 class nodemail{
    constructor(user){
        this.name = user.name;
        this.email = user.email;
        this.time = user.time || new Date(Date.now()).toLocaleTimeString()
        this.date = user.date || new Date(Date.now()).toLocaleDateString();
        this.transporter = nodemailer.createTransport({
    service: process.env.SERVICE,
    auth: {
      user: process.env.USER,
      pass: process.env.PASS
    },
    secure: true
  });
    }
   async sendMail(subject){

    let mailOptions = {
      from: process.env.USER,
      to: this.email,
      subject: subject || 'Appointment Confirmation',
      // ✅ Improved HTML body — can include dynamic info
      html: `
        <div style="font-family: Arial, sans-serif; color: #333;">
          <h2 style="color:#4CAF50;">Your Request is Confirmed</h2>
          <p>Dear <b>${this.name}</b>,</p>
          <p>Your request has been accepted.</p>
          <ul>
            <li><b>Date:</b> ${this.date}</li>
            <li><b>Time:</b> ${this.time}</li>
          </ul>
          <p>We look forward to seeing you!</p>
          <br>
          <p style="font-size: 0.9em; color: #777;">— Healthcare Hospital Team</p>
        </div>
      `
    };

   await this.transporter.sendMail(mailOptions, (error, info) => {
    if (error) console.error("Email error:", error);
    else console.log("Confirmation email sent!");
  });

    }
 }


 module.exports = nodemail;