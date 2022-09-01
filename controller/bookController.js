//Express module import
const express = require('express');

//Model import
const bookModel = require('../model/bookModel');

//Configure a routing resource (Router)
const router = express.Router();

//Book listing route
router.get('/listBooks', (req, res) => {
    res.send('Book listing route');
});

//Book registration route
router.post('/registerBooks', (req, res) => {
    console.log(req.body)
    res.send('Book registration route');
});

//Book editing route
router.put('/editBooks', (req, res) => {
    res.send('Book editing route');
});

//Book deletion route
router.delete('/deleteBooks', (req, res) => {
    res.send('Book deletion route');
});

module.exports = router;