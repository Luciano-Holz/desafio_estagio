
class Tablees {
    init(connection) {
        this.connection = connection;
        this.createCity();
    }

    createCity() {
        const sql = 'CREATE TABLE IF NOT EXISTS city (id INT NOT NULL AUTO_INCREMENT, name VARCHAR(50) NOT NULL, state VARCHAR(30) NOT NULL, PRIMARY KEY(id))';

        this.connection.query(sql, erro => {
            if(erro) {
                console.log('Table not created.', erro);
            } else {
                console.log('Table created successfully!');
            }
        })
    }
}

module.exports = new Tablees;