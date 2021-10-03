//File to creation tables
//class Tables with the init method that will start and receive the database connection
class Tablees {
    init(connection) {
        this.connection = connection;
        this.createCity();
        this.createClient();
    }
    //creating table city
    createCity() {
        const sql = 'CREATE TABLE IF NOT EXISTS city (id INT NOT NULL AUTO_INCREMENT, name VARCHAR(50) NOT NULL, state VARCHAR(30) NOT NULL, PRIMARY KEY(id))';

        this.connection.query(sql, error => {
            if(error) {
                console.log('Table city not created.', error);
            } else {
                console.log('Table city created successfully!');
            }
        })
    }
    //creating table client
    createClient() {
    const sql = 'CREATE TABLE IF NOT EXISTS client (id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, name VARCHAR(100) NOT NULL, gender ENUM("Masculino", "Feminino", "Outro", "Prefiro não dizer"), birth_date DATE NOT NULL, age INT NOT NULL, city INT, FOREIGN KEY(city) REFERENCES city(id) ON DELETE CASCADE)';
    
    this.connection.query(sql, error => {
        if(error) {
            console.log('Table client not created.', error);
        } else {
            console.log('Table client created successfully!');
        }
    });
    }
}
//exports class Tablees
module.exports = new Tablees;