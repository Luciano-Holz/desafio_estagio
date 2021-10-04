//File responsible for connecting with necessary methods
//import module connection
const connection = require('../infra/connection');
//class to insert data into the client table
class Client {
    //Methods for table client
    //client ​​class add method
    add(client, res) {
        const sql = 'INSERT INTO client SET ?';

        connection.query(sql, client, (error, results) => {
            if(error) {
                res.status(400).json(error);
            } else {
                res.status(201).json(client);
            }
        })
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
    //client class search method
    search(id, res) {
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
        const sql = `DELETE FROM client WHERE id=?`;
        
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