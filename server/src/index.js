import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import dbConnect from './config/db.js';

dotenv.config();
dbConnect();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded ({extended : false}));

app.get('/settlershub/list', (req,res) => {
    res.send('Testing the server')
})
app.listen(5000, () => console.log('server is set to run at port 5000'))