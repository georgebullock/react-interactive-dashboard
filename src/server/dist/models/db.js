"use strict";
require('dotenv').config();
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
});
connection.connect();
connection.query('SELECT 1 + 1 AS solution', (err, rows, fields) => {
    if (err)
        throw err;
    console.log('The solution is: ', rows[0].solution);
});
connection.end();
//# sourceMappingURL=db.js.map