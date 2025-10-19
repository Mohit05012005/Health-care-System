const express= require('express');
const app = express();
const appointment_controller = require('../controller/appointment_controller');
const contactus_controller = require('../controller/contactus_controller');
const router = express.Router();

router.route('/appointment')
.post(appointment_controller.userAppointment);

router.route('/contact')
.post(contactus_controller.contact_us);
module.exports = router;