//File responsible for connecting with necessary methods
//import module connection
const connection = require('../infra/connection');
//class to insert data into the client table
class Client {
    add(client, res) {
        const sql = 'INSERT INTO client SET ?';

        connection.query(sql, client, (error, results) => {
            if(error) {
                res.status(400).json(error);
            } else {
                res.status(201).json(results);
            }
        })
    }
    // lists(res) {
    //     const sql = `SELECT * FROM client`;

    //     connection.query(sql, (error, results) => {
    //         if(error) {
    //             res.status(400).json(error);
    //         } else {
    //             res.status(200).json(results);
    //         }
    //     })
    // }
}

module.exports = new Client;