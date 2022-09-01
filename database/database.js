//Sequelize module import
const Sequelize = require('sequelize');

//Creating a sequelize instance and connecting to mysql database
/* Database connection parameters
 * 1 - Database name - String
 * 2 - Database user - String
 * 3 - Database password - String
 * 4 - JSON Object - Configuration for database usage
 *      4.1 - Database instance location (localhost)
 *      4.2 - Database type (MySql)
 *      4.3 - Database timezone settings
 */

const connection = new Sequelize(
    'librids3t',
    'root',
    '12345678',
    {
        host: 'localhost',
        dialect: 'mysql',
        timezone: '-03:00'
    }
);

module.exports = connection;