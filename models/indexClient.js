//File responsible for connecting with necessary methods
//import module connection
const connection = require('../infra/connection');
//import module moment
const moment = require('moment');
//class to insert data into the client table
class Client {
    //Methods for table client
    //client ​​class add method with validations
    add(client, res) {
        const birth_date = moment(client.birth_date, 'DD-MM-YYYY').format('YYYY-MM-DD');
        const birthdate = moment(birth_date);

        const name = client.name;
        const nameValid = name.length >=3;

        const validations = [
            {
                name: "birth_date",
                valid: birthdate,
                message: "The date is incorrect."
             },
            {
                name: "name",
                valid: nameValid,
                message: "The name field must have more than 3 characters."
            }  
        ]
        const errors = validations.filter(field => !field.valid);
        const existsErrors = errors.length;

        if(existsErrors) {
            res.status(400).json(errors);
        } else {
            const clientAndDateCorrect = {...client, birth_date, name}

            const sql = 'INSERT INTO client SET ?';

            connection.query(sql, clientAndDateCorrect, (error, results) => {
                if(error) {
                    res.status(400).json(error);
                } else {
                    res.status(201).json(client);
                }
            })
        }   
    }
    //client class lists method
    lists(res) {
        const sql = `SELECT * FROM client`;

        connection.query(sql, (error, results) => {
            if(error) {
                res.status(400).json(error);
            } else {
                res.status(200).json(results);
            }
        })
    }
    //client class searchByName method
    searchByName(name, res) {
        const sql = `SELECT * FROM client WHERE name=${name}`;

        connection.query(sql, (error, results) => {
            const client = results[0];
            if(error) {
                res.status(400).json(error);
            } else {
                res.status(200).json(client);
            }
        })
    }
    //client class searchById method
    searchById(id, res) {
        const sql = `SELECT * FROM client WHERE id=${id}`;

        connection.query(sql, (error, results) => {
            const client = results[0];
            if(error) {
                res.status(400).json(error);
            } else {
                res.status(200).json(client);
            }
        })
    }
    //client class alter method
    alter(id, values, res) {
        const sql = `UPDATE client SET ? WHERE id=?`;

        connection.query(sql, [values, id], (error, results) => {
            if(error) {
                res.status(400).json(error);
            } else {
                res.status(200).json({...values, id});
            }
        })
    }
    //client class remove method
    remove(id, res) {
        const sql = `DELETE FROM client WHERE id=${id}`;
        
        connection.query(sql, (error) => {
            if(error) {
                res.status(400).json(error);
            } else {
                res.status(200).json(`The id ${id} was deleted successfully`);
            }
        })
    }
}

module.exports = new Client;