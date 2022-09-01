const express = require('express');
const app = express();

app.use(express.json());

//Books routes file import
const booksController = require('./controller/bookController');

app.use('/', booksController);

app.listen(1500, ()=>{
    console.log('Application running on - http://localhost:1500');
});