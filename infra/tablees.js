
class Tablees {
    init(connection) {
        this.connection = connection;
        this.createCity();
        //this.createClient();
    }

    createCity() {
        const sql = 'CREATE TABLE IF NOT EXISTS city (id INT NOT NULL AUTO_INCREMENT, name VARCHAR(50) NOT NULL, state VARCHAR(30) NOT NULL, PRIMARY KEY(id))';

        this.connection.query(sql, erro => {
            if(erro) {
                console.log('Table city not created.', erro);
            } else {
                console.log('Table city created successfully!');
            }
        })
    }

    // createClient() {
    // const sql = 'CREATE TABLE IF NOT EXISTS client (id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, gender ENUM("Masculino", "Feminino", "Outro", "Prefiro não dizer"), name VARCHAR(100) NOT NULL, birth_date DATE NOT NULL, age INT NOT NULL, city VARCHAR(50), FOREIGN KEY(city) REFERENCES city(name) ON DELETE CASCADE)';
    
    // this.connection.query(sql, erro => {
    //     if(erro) {
    //         console.log('Table client not created.', erro);
    //     } else {
    //         console.log('Table client created successfully!');
    //     }
    // });
    // }
}

module.exports = new Tablees;