require('dotenv').config();
import express from 'express';
import helmet from 'helmet';
import logger from 'morgan';
import cookieParser from 'cookie-parser';

const app = express();
const port = process.env.SERVER_PORT || 9000;

app.use(logger('dev'));
app.use(helmet());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
	res.json({
		message: `Serving React Interactive Dashboard: Home Page on port ${port}`
	});
});

app.get('/users', (req, res) => {
	res.json({
		message: `Serving React Interactive Dashboard Users Page on port ${port}`
	});
});

app.listen(port);

export default app;
