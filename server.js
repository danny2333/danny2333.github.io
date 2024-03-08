// server.js

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

let thoughts = [];

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/submit', (req, res) => {
    const { name, thought } = req.body;
    thoughts.push({ name, thought });
    res.redirect('/');
});

app.get('/thoughts', (req, res) => {
    res.json(thoughts);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
