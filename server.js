const express = require('express');
const mysql = require('mysql2');
const path = require('path');

const app = express();
const port = 3000;

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'self_service'
});

app.use(express.static(path.join(__dirname, 'public')));

app.get('/products', (req, res) => {
    connection.query('SELECT * FROM products', (error, results) => {
        if (error) throw error;
        res.json(results);
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
