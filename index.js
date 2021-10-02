//import module customExpress
const customExpress = require('./config/customExpress');
//instance customExpress with const app
const app = customExpress();


//server listen at port 3000
app.listen(3000, () => console.log("Server listen at port 3000"));