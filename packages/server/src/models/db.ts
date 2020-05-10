require('dotenv').config({ path: './../../.env' });
const mysql = require('mysql');

const pool = mysql.createPool({
	connectionLimit: 10,
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME
});

pool.query('SELECT 1 + 1 AS solution', function(error, results) {
	if (error) throw error;
	console.log(
		`Solution is ${results[0].solution} . Your database connection was successful`
	);
});

module.exports = pool;
