//Sequelize module import
const Sequelize = require('sequelize');

//Database connection import
const connection = require('../database/database');

/*
    Model representation of tbl_book data parameters:
    1- Table name
    2- JSON object content:
        Field name
        Data type
        Field rules
*/

const bookModel = connection.define(
    'tbl_book',
    {
        book_cod:{
            type: Sequelize.INTEGER(10),
            primaryKey:true,
            autoIncrement:true
        },
        title:{
            type: Sequelize.STRING(100),
            allowNull:true,
        },
        description:{
            type: Sequelize.TEXT,
            allowNull:true,
        },
        image:{
            type: Sequelize.STRING(500),
            allowNull:true,
        }
    }
);

// bookModel.sync({force:true});

module.exports = bookModel;