require('dotenv').config()
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello Bhanu!');
});
app.get('/youtube',(req,res) => {
    res.send('<h1>please subscribe to my youtube channel</h1>');
});

app.listen(process.env.port, () => {
    console.log('Server running on port 4000');
});