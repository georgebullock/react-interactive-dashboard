require('dotenv').config();
import app from './app';

const port = process.env.SERVER_PORT || 9000;
app.listen(port);
