//Express module import
const express = require('express');

//Model import
const bookModel = require('../model/bookModel');

//Configure a routing resource (Router)
const router = express.Router();

//Book listing route
router.get('/listBooks', (req, res) => {
    // res.send('Book listing route');

    bookModel.findAll()
    .then(
        (books) => {
            res.status(200).send(books);
        }
    )
    .catch(
        (error) => {
            res.status(500).json({"MSG":error})
        }
    );
});

//Book listing route by book code
router.get('/listBooks/:book_cod', (req, res) => {
    
    let { book_cod } = req.params;

    bookModel.findByPk(book_cod)
    .then(
        (book) => {
            res.status(200).send(book);
        }
    )
    .catch(
        (error) => {
            res.status(500).json({"MSG":error})
        }
    );

    // bookModel.findAll({
    //     where:{
    //         book_cod
    //     }
    // })
    // .then(
    //     (book) => {
    //         res.status(200).send(book);
    //     }
    // )
    // .catch(
    //     (error) => {
    //         res.status(500).json({"MSG":error})
    //     }
    // );

   
});

//Book registration route
router.post('/registerBooks', (req, res) => {
    // console.log(req.body)
    // res.send('Book registration route');

    let { title, description, image } = req.body;
    console.log(req.body);
    bookModel.create({
        title,
        description,
        image
    }).then(
        () => { 
            res.status(201).json({"MSG": "Book successfully inserted."})
        }
    ).catch(
        (error) => {
            res.status(500).json({"MSG":error})
        }
    );
});

//Book editing route
router.put('/editBooks/:book_cod', (req, res) => {
    // res.send('Book editing route');

    let { book_cod } = req.params;
    let { title, description, image } = req.body;

    bookModel.update(
        {
        title,
        description,
        image,
        },
        {where:{book_cod}}
    )
    .then(
        () => {
            res.status(200).json({"MSG":"Book successfully edited."});
        }
    )
    .catch(
        (error) => {
            res.status(500).json({"MSG":error});
        }
    );
});

//Book deletion route
router.delete('/deleteBooks/:book_cod', (req, res) => {
    // res.send('Book deletion route');

    let { book_cod } = req.params;

    bookModel.destroy({
        where:{book_cod}
    })
    .then(
        () => {
            res.status(200).json({"MSG":"Book successfully deleted."})
        }
    )
    .catch(
        (error) => {
            res.status(500).json({"MSG":error});
        }
    );
});

module.exports = router;