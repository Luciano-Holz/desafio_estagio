//File with configurations from application 
//import module express
const express = require('express');
//import module consign 
const consign = require('consign');
//export function what configure the aplication and return a variable app
module.exports = () => {
    //instance express with const app
    const app = express();
    //is a method inbuilt in express to recognize the incoming Request Object as a JSON Object
    app.use(express.json());
    //is a method inbuilt in express to recognize the incoming Request Object as strings or arrays
    app.use(express.urlencoded({extended: true}));
    //consign include all modules from controllers
    consign()
        .include('controllers')
        .into(app)

        return app;
        
}
