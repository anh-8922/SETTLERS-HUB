import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

app.get('/cookbook/list', (req,res) => {
    res.send('Testing the server')
})
app.listen(5000, () => console.log('server is set to run at port 5000'))