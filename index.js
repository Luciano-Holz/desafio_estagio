//Main application file
//import module customExpress
const customExpress = require('./config/customExpress');
//const conection 
const connection = require('./infra/connection');

const Tablees = require('./infra/tablees')

//connecting with file conection
connection.connect(erro => {
    if(erro) {
        console.log("Not connected to the database.", erro);
    } else {
        console.log('Successfully connected!');
        //connection in use
        Tablees.init(connection);
        //instance customExpress with const app
        const app = customExpress();
        //server listen at port 3000
        app.listen(3000, () => console.log("Server listening on port 3000"));
    }
})

