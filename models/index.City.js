//File responsible for connecting with necessary methods
//import module connection
const connection = require('../infra/connection');
//class to insert data into the city table
class City {
    add(city, res) {
        const sql = 'INSERT INTO city SET ?';

        connection.query(sql, city, (error, results) => {
            if(error) {
                res.status(201).json(error);
            } else {
                res.status(400).json(city);
            }
        } )
    }
}

module.exports = new City;