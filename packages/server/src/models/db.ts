require('dotenv').config({ path: './../../.env' });
import mysql, { Pool } from 'mysql';
import { MySQLConnection } from './../interfaces/mySqlConnection';

const createConnection = (): MySQLConnection => {
	let connection: Pool;

	return {
		open: (): Pool => {
			connection = mysql.createPool({
				connectionLimit: 10,
				host: process.env.DB_HOST,
				user: process.env.DB_USER,
				password: process.env.DB_PASSWORD,
				database: process.env.DB_NAME
			});

			return connection;
		},

		close: (): void => {
			connection.end();
		}
	};
};

export default createConnection();
