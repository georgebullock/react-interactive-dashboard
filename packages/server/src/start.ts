require('dotenv').config();
import createServer from './app';

const port = process.env.SERVER_PORT || 9000;
createServer().listen(port);
