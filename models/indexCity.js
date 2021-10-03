//File responsible for connecting with necessary methods
//import module connection
const connection = require('../infra/connection');
//class to insert data into the city table
class City {
    //Routes for table city
    //city ​​class add method
    add(city, res) {
        const sql = 'INSERT INTO city SET ?';

        connection.query(sql, city, (error, results) => {
            if(error) {
                res.status(400).json(error);
            } else {
                res.status(201).json(city);
            }
        } )
    }
    //city ​​class list method
    list(res) {
        const sql = `SELECT * FROM city`;

        connection.query(sql, (error, results) => {
            if(error) {
                res.status(400).json(error);
            } else {
                res.status(200).json(results);
            }
        } )
    }
    //city ​​class nameList method
    nameList(res) {
        const sql = 'SELECT name FROM city';

        connection.query(sql, (error, results) => {
            if(error) {
                res.status(400).json(error);
            } else {
                res.status(200).json(results);
            }
        } )
    }

    stateList(res) {
        const sql = `SELECT state FROM city`;

        connection.query(sql, (error, results) => {
            if(error) {
                res.status(400).json(error);
            } else {
                res.status(200).json(results);
            }
        } )
    }
    
}

module.exports = new City;