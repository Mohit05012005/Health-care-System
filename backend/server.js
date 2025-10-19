const express = require('express');
const app = express();
const path = require('path');
const router = require('./route/routers');
const mongoose = require('mongoose');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // To parse URL-encoded bodies - form data in body 


// Use appointment routes
app.use('/api/v1',router);



mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("connected to database");
})
.catch((err)=>{
    console.log("connection failed",err);
})


// Define port
const port = process.env.PORT || 5000;

// Serve all files from myminiproject
app.use(express.static(path.join(__dirname, '..', 'myminiproject')));

// Routes for each page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'myminiproject', 'index.html'));
});

app.get('/services', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'myminiproject', 'services.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'myminiproject', 'contact.html'));
});

app.get('/appointment', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'myminiproject', 'appointment.html'));
});

// Start server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});