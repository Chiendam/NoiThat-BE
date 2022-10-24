import bodyParser from 'body-parser';
import express from 'express';
import connectDB from './config/connectDB';
import initApiRouter from './router/api';

require('dotenv').config()

const app = express();
app.use(bodyParser.json());
const port = process.env.PORT || 3000

app.use(express.urlencoded({extended: true}));
app.use(express.json());

// init router
initApiRouter(app);

// connect DB
connectDB();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})