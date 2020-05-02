require('dotenv').config();
const mysql = require('mysql');

const connection = mysql.createConnection({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD
});

connection.connect();

connection.query(err => {
	if (err) throw err;

	console.log('Successfully connected to the database.');
});

module.exports = connection;
