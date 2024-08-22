const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: ''  // Use your MySQL root password here
});

const createDatabase = `CREATE DATABASE IF NOT EXISTS self_service`;
const useDatabase = `USE self_service`;
const createTable = `
CREATE TABLE IF NOT EXISTS products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    photo VARCHAR(255),
    name VARCHAR(255),
    price DECIMAL(10, 2),
    active BOOLEAN DEFAULT FALSE,
    quantity INT DEFAULT 1
)`;
const insertData = `
INSERT INTO products (photo, name, price) VALUES 
    ('img/big-mac.png', 'Big Mac', 5.99),
    ('img/mc-chicken.png', 'Mc Chicken', 4.99),
    ('img/double-cb.png', 'Double Cheese Burger', 2.99),
    ('img/fries.png', 'Fries', 2.99),
    ('img/nuggets.png', 'Mc Nuggets', 3.49),
    ('img/salad.png', 'Salad', 2.79),
    ('img/cola.png', 'Coke', 1.99),
    ('img/lipton.png', 'Ice Tea', 1.99),
    ('img/water.png', 'Water', 1.49),
    ('img/water.png', 'Water #2', 1.49)
`;

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL server');

    connection.query(createDatabase, (err) => {
        if (err) throw err;
        console.log('Database created');

        connection.query(useDatabase, (err) => {
            if (err) throw err;

            connection.query(createTable, (err) => {
                if (err) throw err;
                console.log('Table created');

                connection.query(insertData, (err) => {
                    if (err) throw err;
                    console.log('Data inserted');
                    connection.end();
                });
            });
        });
    });
});
