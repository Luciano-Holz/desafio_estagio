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
    //city table get(name cities) route
    app.get('/:cities/name', (req, res) => {
        City.nameList(res);
    });
    //city table get(state cities) route
    app.get('/:cities/state', (req, res) => {
        City.stateList(res);
    });
    
    //Routes for table client
    //route post from table client
    app.post('/clients/', (req, res) => {
        const client = req.body;
        Client.add(client, res);
    });
    //route get from table client
    app.get('/clients/', (req, res) => {
        Client.lists(res);
    });
    //route get by name table client
    app.get('/clients/:name', (req, res) => {
        const name = `"${req.params.name}"`;
        Client.searchByName(name, res);
    });
    //route get by id table client
    app.get('/:id', (req, res) => {
        const id = parseInt(req.params.id);
        Client.searchById(id, res);
    });
    //route patch from table
    app.patch('/clients/:id', (req, res) => {
        const id = parseInt(req.params.id);
        const values = req.body;
        Client.alter(id, values,res);
    });
    //route delete from table client
    app.delete('/clients/:id', (req, res) => {
        const id = parseInt(req.params.id);
        Client.remove(id, res);
    });


}

