//File to control routes and their function
//import file from class City
const City = require('../models/indexCity');
//import file from class Client
const Client = require('../models/indexClient');
//export function what is getting app
module.exports = app => {
    //Routes for table city
    //city ​​table post route
    app.post('/cities', (req, res) => {
        const city = req.body;
        City.add(city, res);
    });
    //city ​​table get route
    app.get('/cities', (req, res) => {
        City.list(res);
    });
    //city ​​table get(name cities) route
    app.get('/:cities/name', (req, res) => {
        City.nameList(res);
    });
    //city table get(state cities) route
    app.get('/:cities/state', (req, res) => {
        City.stateList(res);
    });
    
    //Routes for table client
    //route post for table client
    // app.post('/clients/', (req, res) => {
    //     const client = req.body;
    //     Client.add(client, res);
    // });
    // app.get('/clients/', (req, res) => {
    //     Client.lists(res);
    // });


}

