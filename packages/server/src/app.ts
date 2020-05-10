// @ts-nocheck
require('dotenv').config();
const sql = require('./models/db');
const express = require('express');
const helmet = require('helmet');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const app = express();
const port = process.env.SERVER_PORT || 9000;

app.use(logger('dev'));
app.use(helmet());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
	res.json({
		message: `Serving React Interactive Dashboard Server "/" on port ${port}`
	});
});

app.get('/users', (req, res) => {
	const query = `SELECT * from users LIMIT 10`;

	// @ts-ignore
	const queryResults = sql.query(query, (err, results) => {
		if (err) throw err;

		results = JSON.stringify(results);

		return res.json({
			results
		});
	});
});

app.listen(port);

module.exports = app;
