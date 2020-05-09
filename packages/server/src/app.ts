require('dotenv').config();
const sql = require('./models/db');
const express = require('express');
const helmet = require('helmet');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const app = express();
const port = process.env.SERVER_PORT || 9000;

const getCircularReplacer = () => {
	const seen = new WeakSet();
	return (key, value) => {
		if (typeof value === 'object' && value !== null) {
			if (seen.has(value)) {
				return;
			}
			seen.add(value);
		}
		return value;
	};
};

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
	const results = sql.query(query, (err, results) => {
		if (err) throw err;

		results = JSON.stringify(results, getCircularReplacer());
		console.log(results);

		return results;
	});

	res.json({
		message: results
	});
});

app.listen(port);

module.exports = app;
