require('dotenv').config();
import express from 'express';
import helmet from 'helmet';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import routes from './api/index';
import cors from 'cors';

const app = express();
const port = process.env.SERVER_PORT || 9000;

// Eventually move this to it's own app-level middleware module
app.use(logger('dev'));
app.use(helmet());
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Eventually app.ts should only include routes like those below
app.use('/', routes.index);
app.use('/user', routes.user);

app.listen(port);

export default app;
